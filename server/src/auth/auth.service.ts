import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import slugify from 'slugify';
import { User } from '../users/entities/user.entity';
import * as bcrypt from 'bcrypt';
import { AuthEmailLoginDto } from './dto/auth-email-login.dto';
import { AuthUpdateDto } from './dto/auth-update.dto';
import { randomStringGenerator } from '@nestjs/common/utils/random-string-generator.util';
import { RoleEnum } from 'src/roles/roles.enum';
import { StatusEnum } from 'src/statuses/statuses.enum';
import * as crypto from 'crypto';
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
import { OtpService } from 'src/otp/otp.service';
import { RefreshService } from 'src/refresh/refresh.service';
import { StripeService } from 'src/stripe/stripe.service';
import { Otp } from 'src/otp/entities/otp.entity';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
    private otpsService: OtpService,
    private stripeService: StripeService,
    private forgotService: ForgotService,
    private mailService: MailService,
    private keywordsService: KeywordsService,
    private refreshesService: RefreshService,
  ) {}

  async validateLogin(
    loginDto: AuthEmailLoginDto,
    onlyAdmin: boolean,
  ): Promise<LoginResponseType> {
    let user: User | undefined;

    const foundUser = await this.usersService.findOne({
      email: loginDto.identifier,
    });

    if (foundUser) {
      user = foundUser;
    } else if (!foundUser) {
      const keyword = await this.keywordsService.findOne({
        slug: slugify(loginDto.identifier, { lower: true }),
      });
      user = keyword?.user;
    }

    if (
      !user ||
      (user?.role &&
        !(onlyAdmin ? [RoleEnum.admin] : [RoleEnum.user]).includes(
          user.role.id,
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

    if (user.provider !== AuthProvidersEnum.email && !user.password) {
      throw new HttpException(
        {
          status: HttpStatus.UNPROCESSABLE_ENTITY,
          errors: {
            email: `needLoginViaProvider:${user.provider}`,
          },
        },
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    const isValidPassword = await bcrypt.compare(
      loginDto.password,
      user.password,
    );

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

    if (user.twoFactorAuthEnabled) {
      const otp = await this.otpsService.create({
        user,
      });

      await this.mailService.twoFactorAuth({
        to: user?.email || '',
        data: {
          otp: otp.token || '',
        },
      });
      return { user };
    }

    const token = this.jwtService.sign({
      id: user.id,
      role: user.role,
    });

    const refreshToken = await this.refreshesService.create({
      user,
      token: randomStringGenerator(),
    });

    return { token, refreshToken: refreshToken.token, user };
  }

  async validateSocialLogin(
    authProvider: string,
    socialData: SocialInterface,
  ): Promise<LoginResponseType> {
    let user: NullableType<User>;
    const socialEmail = socialData.email?.toLowerCase();

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
      const stripeDetails = await this.stripeService.createStripeCustomer({
        email: socialEmail ?? '',
        fullName: socialData?.firstName || '' + socialData?.lastName || '',
      });
      user = await this.usersService.create({
        email: socialEmail ?? null,
        fullName:
          (socialData?.firstName || '' + ' ' + socialData?.lastName || '') ??
          null,
        socialId: socialData.id,
        provider: authProvider,
        role,
        status,
        stripeCustomerId: stripeDetails.id,
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
    const refreshToken = await this.refreshesService.create({
      user,
      token: randomStringGenerator(),
    });

    return {
      token: jwtToken,
      refreshToken: refreshToken.token,
      user,
    };
  }

  async register(dto: AuthRegisterLoginDto): Promise<void> {
    const stripeDetails = await this.stripeService.createStripeCustomer({
      email: dto.email,
      fullName: dto.fullName,
    });
    const newUser = await this.usersService.create({
      ...dto,
      email: dto.email,
      role: {
        id: RoleEnum.user,
      } as Role,
      status: {
        id: StatusEnum.inactive,
      } as Status,
      stripeCustomerId: stripeDetails.id,
    });

    if (!newUser) {
      throw new HttpException(
        {
          status: HttpStatus.UNPROCESSABLE_ENTITY,
          errors: {
            user: 'email_already_exists',
          },
        },
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    const otp = await this.otpsService.create({ user: newUser });
    if (!otp) {
      throw new HttpException(
        {
          status: HttpStatus.UNPROCESSABLE_ENTITY,
          errors: {
            user: 'otp_not_created',
          },
        },
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    await this.mailService.userSignUp({
      to: dto.email,
      data: {
        otp: otp.token || '',
      },
    });
  }

  async checkEmailExists(email: string): Promise<boolean> {
    const user = await this.usersService.findOne({
      email,
    });

    if (user) {
      return true;
    }
    return false;
  }

  async confirmEmail(otp: string): Promise<LoginResponseType> {
    const foundOtp = (await this.otpsService.findOne({
      token: otp,
    })) as Otp;

    if (!foundOtp) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: `notFound`,
        },
        HttpStatus.NOT_FOUND,
      );
    }

    const user = (await this.usersService.findOne({
      id: foundOtp?.user?.id,
    })) as User;

    console.log(foundOtp);
    foundOtp.token = null;
    foundOtp.used = true;
    foundOtp.usedAt = new Date();

    user.status = plainToClass(Status, {
      id: StatusEnum.active,
    });
    await user.save();
    await foundOtp.save();

    const accessToken = this.jwtService.sign({
      id: user.id,
      role: user.role,
    });

    const refreshToken = await this.refreshesService.create({
      user,
      token: randomStringGenerator(),
    });

    return { token: accessToken, refreshToken: refreshToken.token, user };
  }

  async refreshAccessToken(token: string): Promise<LoginResponseType> {
    const foundRefreshToken = await this.refreshesService.findOne({
      token,
    });
    console.log(foundRefreshToken);

    if (!foundRefreshToken) {
      throw new HttpException(
        {
          status: HttpStatus.UNPROCESSABLE_ENTITY,
          errors: {},
        },
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    const user = await this.usersService.findOne({
      id: foundRefreshToken.user.id,
    });

    if (!user) {
      throw new HttpException(
        {
          status: HttpStatus.UNPROCESSABLE_ENTITY,
          errors: {},
        },
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    foundRefreshToken.used = true;
    foundRefreshToken.usedAt = new Date();
    await foundRefreshToken.save();

    const accessToken = this.jwtService.sign({
      id: user.id,
      role: user.role,
    });

    const newRefreshToken = await this.refreshesService.create({
      user,
      token: randomStringGenerator(),
    });

    return { token: accessToken, refreshToken: newRefreshToken.token, user };
  }

  async forgotPassword(identifier: string): Promise<void> {
    let user: User | null;
    const foundUser = await this.usersService.findOne({
      email: identifier,
    });

    if (foundUser) {
      user = foundUser;
    } else {
      const foundKeyword = await this.keywordsService.findOne({
        slug: identifier.toLowerCase().replace(/ /g, '-'),
      });
      user = foundKeyword?.user || null;
    }

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

    const hash = crypto
      .createHash('sha256')
      .update(randomStringGenerator())
      .digest('hex');
    await this.forgotService.create({
      hash,
      user,
    });

    await this.mailService.forgotPassword({
      to: user.email || '',
      data: {
        hash,
      },
    });
  }

  async resetPassword(hash: string, password: string): Promise<void> {
    const forgot = await this.forgotService.findOne({
      where: {
        hash,
      },
    });

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

  async delete(user: User): Promise<void> {
    await this.usersService.delete(user.id);
  }
}
