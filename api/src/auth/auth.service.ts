import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/entities/user.entity';
import * as bcrypt from 'bcryptjs';
import slugify from 'slugify';
import { nanoid } from 'nanoid';
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

@Injectable()
export class AuthService {
  constructor(
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
            email: 'notFound',
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
            email: `needLoginViaProvider:${foundUser.provider}`,
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
            password: 'incorrectPassword',
          },
        },
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    // Create new refresh token in db and assign it to user
    const refreshToken = await this.refreshService.create({
      token: nanoid(),
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
            user: 'userNotFound',
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
      token: nanoid(),
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
    // generate random 6 digit number
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // store hash in db along with user data
    await this.usersService.create({
      ...dto,
      email: dto.email,
      role: {
        id: RoleEnum.user,
      } as Role,
      status: {
        id: StatusEnum.inactive,
      } as Status,
      otp,
    });

    // Send email with OTP
    await this.mailService.userSignUp({
      to: dto.email,
      data: {
        otp,
      },
    });
  }

  // Confirm email with OTP
  async confirmEmail(otp: string): Promise<LoginResponseType> {
    // find user by otp
    const user = await this.usersService.findOne({
      otp,
    });

    if (!user) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: `notFound`,
        },
        HttpStatus.NOT_FOUND,
      );
    }

    // Create stripe customer
    const stripeCustomer = await this.stripeService.createCustomer({
      email: user?.email as string,
      name: `${user?.fullName}`,
    });

    user.otp = null;
    user.status = plainToClass(Status, {
      id: StatusEnum.active,
    });
    user.stripeCustomerId = stripeCustomer.id;
    const token = this.jwtService.sign({
      id: user.id,
      role: user.role,
    });
    await user.save();

    const refreshToken = await this.refreshService.create({
      token: nanoid(),
      user: user,
    });

    return { token, refreshToken: refreshToken.token, user };
  }

  //Generate new access token with refresh token
  async refreshAccessToken(
    refreshToken: AuthRefreshAccessTokenDto,
  ): Promise<LoginResponseType> {
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

          error: `invalidRefreshToken`,
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
      token: nanoid(),
      user: foundRefreshToken.user,
    });

    return {
      token,
      refreshToken: newRefreshToken.token,
      user: foundRefreshToken.user,
    };
  }

  async resendOtp(email: string): Promise<void> {
    const user = await this.usersService.findOne({
      email,
    });
    if (!user) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: `notFound`,
        },
        HttpStatus.NOT_FOUND,
      );
    }
    // generate random 6 digit number
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    user.otp = otp;
    await user.save();
    await this.mailService.userSignUp({
      to: email,
      data: {
        otp,
      },
    });
  }

  async forgotPassword(email: string): Promise<void> {
    const user = await this.usersService.findOne({
      email,
    });

    if (!user) {
      throw new HttpException(
        {
          status: HttpStatus.UNPROCESSABLE_ENTITY,
          errors: {
            email: 'emailNotExists',
          },
        },
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
    // generate random 6 digit number
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // Create new forgot password record
    await this.forgotService.create({
      otp: otp,
      user,
    });

    // Send email with otp to user
    await this.mailService.forgotPassword({
      to: email,
      data: {
        otp,
      },
    });
  }

  async resetPassword(otp: string, password: string): Promise<void> {
    // Find email with matching otp in forgot password table
    const forgot = await this.forgotService.findOne({
      where: {
        otp,
      },
    });

    // If not found, throw error
    if (!forgot) {
      throw new HttpException(
        {
          status: HttpStatus.UNPROCESSABLE_ENTITY,
          errors: {
            hash: `notFound`,
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
  }

  async me(user: User): Promise<NullableType<User>> {
    return this.usersService.findOne({
      id: user.id,
    });
  }

  async update(
    user: User,
    userDto: AuthUpdateDto,
  ): Promise<NullableType<User>> {
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
                user: 'userNotFound',
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
                oldPassword: 'incorrectOldPassword',
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
              oldPassword: 'missingOldPassword',
            },
          },
          HttpStatus.UNPROCESSABLE_ENTITY,
        );
      }
    }

    await this.usersService.update(user.id, userDto);

    return this.usersService.findOne({
      id: user.id,
    });
  }

  async softDelete(user: User): Promise<void> {
    await this.usersService.softDelete(user.id);
  }
}
