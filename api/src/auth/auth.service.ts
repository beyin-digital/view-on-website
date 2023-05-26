import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/entities/user.entity';
import * as bcrypt from 'bcryptjs';
import slugify from 'slugify';
import { AuthEmailLoginDto } from './dto/auth-email-login.dto';
import { AuthUpdateDto } from './dto/auth-update.dto';
import { RoleEnum } from 'src/roles/roles.enum';
import { StatusEnum } from 'src/statuses/statuses.enum';
import { plainToClass } from 'class-transformer';
import { Status } from 'src/statuses/entities/status.entity';
import { Role } from 'src/roles/entities/role.entity';
import { AuthProvidersEnum } from './auth-providers.enum';
import { SocialInterface } from 'src/social/interfaces/social.interface';
import { AuthRegisterLoginDto } from './dto/auth-register-login.dto';
import { UsersService } from 'src/users/users.service';
import { ForgotService } from 'src/forgot/forgot.service';
import { MailService } from 'src/mail/mail.service';
import { NullableType } from '../utils/types/nullable.type';
import { LoginResponseType } from '../utils/types/auth/login-response.type';
import { KeywordsService } from 'src/keywords/keywords.service';
import { StripeService } from 'src/stripe/stripe.service';
import { RefreshService } from 'src/refresh/refresh.service';
import { AuthRefreshAccessTokenDto } from './dto/auth-refresh-access-token.dto';
import { Otp } from './entities/otp.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    @InjectRepository(Otp)
    private otpRepository: Repository<Otp>,
    private jwtService: JwtService,
    private usersService: UsersService,
    private keywordsService: KeywordsService,
    private forgotService: ForgotService,
    private refreshService: RefreshService,
    private mailService: MailService,
    private stripeService: StripeService,
  ) {}

  // Login with email
  async validateLogin(
    loginDto: AuthEmailLoginDto,
    onlyAdmin: boolean,
  ): Promise<LoginResponseType> {
    this.logger.log('Logging user in');
    // temp variable to store user
    let foundUser: User | undefined;

    // Find user by email
    const user = await this.usersService.findOne({
      email: loginDto.identifier,
    });

    if (user) {
      // If user is found, assign it to temp variable
      foundUser = user;
    } else if (!user) {
      // If user is not found by email, find user by keyword
      const keyword = await this.keywordsService.findOne({
        slug: slugify(loginDto.identifier),
      });
      if (keyword) {
        // If user is found by keyword, assign it to temp variable
        foundUser = keyword.user;
      }
    }

    // If user is not found, throw error
    if (
      !foundUser ||
      (foundUser?.role &&
        !(onlyAdmin ? [RoleEnum.admin] : [RoleEnum.user]).includes(
          foundUser.role.id,
        ))
    ) {
      throw new HttpException(
        {
          status: HttpStatus.UNPROCESSABLE_ENTITY,
          errors: {
            email: 'user_not_found',
          },
        },
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    // if user provider is not email, throw error
    if (foundUser.provider !== AuthProvidersEnum.email) {
      throw new HttpException(
        {
          status: HttpStatus.UNPROCESSABLE_ENTITY,
          errors: {
            email: `you_need_to_login_with ${foundUser.provider}`,
          },
        },
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    // Check password validity
    const isValidPassword = await bcrypt.compare(
      loginDto.password,
      foundUser.password,
    );

    // Throw error if password is not valid
    if (!isValidPassword) {
      throw new HttpException(
        {
          status: HttpStatus.UNPROCESSABLE_ENTITY,
          errors: {
            password: 'Password_was_incorrect',
          },
        },
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    if (foundUser.twoFactorAuth) {
      const { otp } = await this.createOtp(foundUser.email as string);
      await this.mailService.twoFactorAuth({
        to: foundUser?.email || '',
        data: {
          otp: otp as string,
        },
      });

      return { user: foundUser };
    }
    // Create new refresh token in db and assign it to user
    const refreshToken = await this.refreshService.create({
      token: this.generateString(20),
      user: foundUser,
    });

    // Create new access token
    const token = this.jwtService.sign({
      id: foundUser.id,
      role: foundUser.role,
    });

    return { token, refreshToken: refreshToken.token, user: foundUser };
  }

  // Social Login
  async validateSocialLogin(
    authProvider: string,
    socialData: SocialInterface,
  ): Promise<LoginResponseType> {
    this.logger.log(`Logging user in with ${authProvider}`);
    // temp variable to store user
    let user: NullableType<User>;

    // Check if social email is provided
    const socialEmail = socialData.email?.toLowerCase();

    // Find user by email
    const userByEmail = await this.usersService.findOne({
      email: socialEmail,
    });

    user = await this.usersService.findOne({
      socialId: socialData.id,
      provider: authProvider,
    });

    if (user) {
      if (socialEmail && !userByEmail) {
        user.email = socialEmail;

        // Update stripe customer id if user doesn't have stripe customer id (precautionary measure lol :D)
        if (!user.stripeCustomerId) {
          // Create stripe customer if user doesn't have stripe customer id
          const stripeCustomer = await this.stripeService.createCustomer({
            email: socialEmail as string,
            name: `${socialData.firstName} ${socialData.lastName}`,
          });
          user.stripeCustomerId = stripeCustomer.id;
        }
      }
      await this.usersService.update(user.id, user);
    } else if (userByEmail) {
      user = userByEmail;
    } else {
      const role = plainToClass(Role, {
        id: RoleEnum.user,
      });
      const status = plainToClass(Status, {
        id: StatusEnum.active,
      });

      // Create stripe customer if user is not found
      const stripeCustomer = await this.stripeService.createCustomer({
        email: socialEmail as string,
        name: `${socialData.firstName} ${socialData.lastName}`,
      });

      // Create new user
      user = await this.usersService.create({
        email: socialEmail ?? null,
        fullName: socialData.firstName + ' ' + socialData.lastName ?? null,
        socialId: socialData.id,
        provider: authProvider,
        role,
        status,
        stripeCustomerId: stripeCustomer.id,
      });

      user = await this.usersService.findOne({
        id: user.id,
      });
    }

    if (!user) {
      throw new HttpException(
        {
          status: HttpStatus.UNPROCESSABLE_ENTITY,
          errors: {
            user: 'user_not_found',
          },
        },
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    const jwtToken = this.jwtService.sign({
      id: user.id,
      role: user.role,
    });

    const refreshToken = await this.refreshService.create({
      token: this.generateString(20),
      user: user,
    });

    return {
      token: jwtToken,
      refreshToken: refreshToken.token,
      user,
    };
  }

  // First step of registration
  async register(dto: AuthRegisterLoginDto): Promise<void> {
    try {
      this.logger.log('Registering new user with email and password');
      // Create new User
      const newUser = await this.usersService.create({
        ...dto,
        email: dto.email,
        role: {
          id: RoleEnum.user,
        } as Role,
        status: {
          id: StatusEnum.inactive,
        } as Status,
      });

      // generete otp , connect to user and then send email
      const { otp } = await this.createOtp(newUser.email as string);

      // Send email with OTP
      await this.mailService.userSignUp({
        to: dto.email,
        data: {
          otp: otp as string,
        },
      });
    } catch (error) {
      this.logger.error({ id: `user-registration-error` }, error);
      throw new HttpException(
        {
          status: HttpStatus.UNPROCESSABLE_ENTITY,
          errors: {
            email: `error_during_registration`,
          },
        },
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
  }

  // Confirm email with OTP
  async confirmEmail(otp: string): Promise<LoginResponseType> {
    this.logger.log('Confirming email with OTP');
    // find user by otp
    const foundOtp = (await this.otpRepository.findOne({
      where: {
        otp,
      },
    })) as Otp;

    const user = await this.usersService.findOne({
      id: foundOtp?.user.id,
    });

    if (!foundOtp || foundOtp.expiredBy <= new Date()) {
      throw new HttpException(
        {
          status: HttpStatus.UNPROCESSABLE_ENTITY,

          error: `otp_expired`,
        },
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    if (!user) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: `user_not_found`,
        },
        HttpStatus.NOT_FOUND,
      );
    }

    foundOtp.otp = null as any;
    await foundOtp.save();
    user.status = plainToClass(Status, {
      id: StatusEnum.active,
    });
    if (!user.stripeCustomerId) {
      // Create stripe customer if user doesn't have stripe customer id
      const stripeCustomer = await this.stripeService.createCustomer({
        email: user?.email as string,
        name: `${user?.fullName}`,
      });
      user.stripeCustomerId = stripeCustomer.id;
    }
    const token = this.jwtService.sign({
      id: user.id,
      role: user.role,
    });
    await user.save();

    const refreshToken = await this.refreshService.create({
      token: this.generateString(20),
      user: user,
    });

    return { token, refreshToken: refreshToken.token, user };
  }

  //Generate new access token with refresh token
  async refreshAccessToken(
    refreshToken: AuthRefreshAccessTokenDto,
  ): Promise<LoginResponseType> {
    try {
      this.logger.log('Refreshing access token');
      const foundRefreshToken = await this.refreshService.findOne({
        where: {
          token: refreshToken.token,
        },
      });

      if (
        !foundRefreshToken ||
        foundRefreshToken.user.status?.id !== StatusEnum.active ||
        foundRefreshToken.tokenUsed
      ) {
        throw new HttpException(
          {
            status: HttpStatus.UNAUTHORIZED,

            error: `invalid_refresh_token`,
          },
          HttpStatus.UNAUTHORIZED,
        );
      }

      foundRefreshToken.tokenUsed = true;
      await foundRefreshToken.save();

      const token = this.jwtService.sign({
        id: foundRefreshToken.user.id,
        role: foundRefreshToken.user.role,
      });

      const newRefreshToken = await this.refreshService.create({
        token: this.generateString(20),
        user: foundRefreshToken.user,
      });

      return {
        token,
        refreshToken: newRefreshToken.token,
        user: foundRefreshToken.user,
      };
    } catch (error) {
      this.logger.error({ id: `refresh-access-token` }, error);
      throw new Error(error);
    }
  }

  async resendOtp(email: string): Promise<void> {
    try {
      this.logger.log('Resending OTP');
      const user = await this.usersService.findOne({
        email,
      });
      if (!user) {
        throw new HttpException(
          {
            status: HttpStatus.NOT_FOUND,
            error: `user_not_found`,
          },
          HttpStatus.NOT_FOUND,
        );
      }
      // generate random 6 digit number
      const otp = await this.createOtp(user.email as string);
      await this.mailService.userSignUp({
        to: email,
        data: {
          otp: otp.otp as string,
        },
      });
    } catch (error) {
      this.logger.error({ id: `resend-otp-error` }, error);
      throw new Error(error);
    }
  }

  async forgotPassword(identifier: string): Promise<void> {
    this.logger.log('Forgot password');
    let foundUser: User | undefined;

    const user = await this.usersService.findOne({
      email: identifier,
    });

    if (user) {
      foundUser = user;
    } else {
      const keyword = await this.keywordsService.findOne({
        slug: slugify(identifier) as string,
      });
      foundUser = keyword?.user;
    }

    if (!foundUser) {
      throw new HttpException(
        {
          status: HttpStatus.UNPROCESSABLE_ENTITY,
          errors: {
            email: 'user_not_found',
          },
        },
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
    // generate random 6 digit number
    const token = this.generateString(30);
    // Create new forgot password record
    await this.forgotService.create({
      token,
      user: foundUser as User,
    });

    // Send email with otp to user
    await this.mailService.forgotPassword({
      to: foundUser?.email as string,
      data: {
        token,
      },
    });
  }

  async resetPassword(token: string, password: string): Promise<void> {
    try {
      this.logger.log('Resetting password');
      // Find email with matching otp in forgot password table
      const forgot = await this.forgotService.findOne({
        where: {
          token,
        },
      });

      // If not found, throw error
      if (!forgot) {
        throw new HttpException(
          {
            status: HttpStatus.UNPROCESSABLE_ENTITY,
            errors: {
              hash: `forgot_password_not_found`,
            },
          },
          HttpStatus.UNPROCESSABLE_ENTITY,
        );
      }

      // If found, update user password
      const user = forgot.user;
      user.password = password;

      await user.save();
      await this.forgotService.softDelete(forgot.id);
    } catch (error) {
      this.logger.error({ id: `reset-password-error` }, error);
      throw new Error(error);
    }
  }

  async me(user: User): Promise<NullableType<User>> {
    try {
      this.logger.log('Getting user data');
      return this.usersService.findOne({
        id: user.id,
      });
    } catch (error) {
      this.logger.error({ id: `getting-user-data-error` }, error);
      throw new Error(error);
    }
  }

  async checkEmail(email: string): Promise<any> {
    try {
      this.logger.log('Checking if email exists');
      const user = await this.usersService.findOne({
        email,
      });

      return {
        exists: !!user,
      };
    } catch (error) {
      this.logger.error({ id: `email-check-error` }, error);
      throw new Error(error);
    }
  }

  async update(
    user: User,
    userDto: AuthUpdateDto,
  ): Promise<NullableType<User>> {
    try {
      this.logger.log('Updating user data');
      if (userDto.password) {
        if (userDto.oldPassword) {
          const currentUser = await this.usersService.findOne({
            id: user.id,
          });

          if (!currentUser) {
            throw new HttpException(
              {
                status: HttpStatus.UNPROCESSABLE_ENTITY,
                errors: {
                  user: 'user_not_found',
                },
              },
              HttpStatus.UNPROCESSABLE_ENTITY,
            );
          }

          const isValidOldPassword = await bcrypt.compare(
            userDto.oldPassword,
            currentUser.password,
          );

          if (!isValidOldPassword) {
            throw new HttpException(
              {
                status: HttpStatus.UNPROCESSABLE_ENTITY,
                errors: {
                  oldPassword: 'incorrect_old_password',
                },
              },
              HttpStatus.UNPROCESSABLE_ENTITY,
            );
          }
        } else {
          throw new HttpException(
            {
              status: HttpStatus.UNPROCESSABLE_ENTITY,
              errors: {
                oldPassword: 'missing_old_password',
              },
            },
            HttpStatus.UNPROCESSABLE_ENTITY,
          );
        }
      }

      await this.usersService.update(user.id, userDto);

      return await this.usersService.findOne({
        id: user.id,
      });
    } catch (error) {
      this.logger.error({ id: `user-update-error` }, error);
      throw new Error(error);
    }
  }

  async softDelete(user: User): Promise<void> {
    try {
      this.logger.log('Deleting user');
      await this.usersService.softDelete(user.id);
    } catch (error) {
      this.logger.error({ id: `delete-user-error` }, error);
      throw new Error(error);
    }
  }

  private async createOtp(email: string) {
    try {
      this.logger.log('Creating OTP');
      const otpToken = Math.floor(100000 + Math.random() * 900000).toString();
      const user = await this.usersService.findOne({
        email,
      });
      const newOtp = this.otpRepository.create({
        otp: otpToken,
        user: user as User,
        expiredBy: new Date(new Date().getTime() + 5 * 60000),
      });

      await newOtp.save();
      return { ...newOtp };
    } catch (error) {
      this.logger.error({ id: `create-otp-error` }, error);
      throw new Error(error);
    }
  }

  generateString(length: number) {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    let result = ' ';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  }
}
