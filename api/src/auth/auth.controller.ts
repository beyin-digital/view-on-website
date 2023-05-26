import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Request,
  Post,
  UseGuards,
  Patch,
  Delete,
  SerializeOptions,
  Query,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthEmailLoginDto } from './dto/auth-email-login.dto';
import { AuthForgotPasswordDto } from './dto/auth-forgot-password.dto';
import { AuthConfirmEmailDto } from './dto/auth-confirm-email.dto';
import { AuthResetPasswordDto } from './dto/auth-reset-password.dto';
import { AuthUpdateDto } from './dto/auth-update.dto';
import { AuthGuard } from '@nestjs/passport';
import { AuthRegisterLoginDto } from './dto/auth-register-login.dto';
import { LoginResponseType } from '../utils/types/auth/login-response.type';
import { User } from '../users/entities/user.entity';
import { NullableType } from '../utils/types/nullable.type';
import { AuthResendOTPDto } from './dto/auth-resend-otp.dto';
import { AuthRefreshAccessTokenDto } from './dto/auth-refresh-access-token.dto';

@ApiTags('Auth')
@Controller({
  path: 'auth',
  version: '1',
})
export class AuthController {
  constructor(private readonly service: AuthService) {}

  //   @ApiBody({
  //     description: 'Checks if email already exists',
  //   })
  @ApiOperation({ summary: 'Checks if email already exists' })
  @Get('email/check')
  @HttpCode(HttpStatus.OK)
  async checkEmail(@Query('email') email: string): Promise<boolean> {
    return this.service.checkEmail(email);
  }

  @ApiOperation({ summary: 'Signs in user based on provided object' })
  @SerializeOptions({
    groups: ['me'],
  })
  @Post('email/login')
  @HttpCode(HttpStatus.OK)
  public login(
    @Body() loginDto: AuthEmailLoginDto,
  ): Promise<LoginResponseType> {
    return this.service.validateLogin(loginDto, false);
  }

  @ApiOperation({ summary: 'Login for admin' })
  @SerializeOptions({
    groups: ['me'],
  })
  @Post('admin/email/login')
  @HttpCode(HttpStatus.OK)
  public adminLogin(
    @Body() loginDTO: AuthEmailLoginDto,
  ): Promise<LoginResponseType> {
    return this.service.validateLogin(loginDTO, true);
  }

  @ApiOperation({ summary: 'Registers new user with email and password' })
  @Post('email/register')
  @HttpCode(HttpStatus.NO_CONTENT)
  async register(@Body() createUserDto: AuthRegisterLoginDto): Promise<void> {
    return this.service.register(createUserDto);
  }

  @ApiOperation({ summary: 'Confirms email based on otp passed in body' })
  @Post('email/confirm')
  @HttpCode(HttpStatus.OK)
  async confirmEmail(
    @Body() confirmEmailDto: AuthConfirmEmailDto,
  ): Promise<LoginResponseType> {
    return this.service.confirmEmail(confirmEmailDto.otp);
  }

  @ApiOperation({ summary: 'Sends new otp on request' })
  @Post('email/resend/otp')
  @HttpCode(HttpStatus.NO_CONTENT)
  async resendOtp(@Body() resendOtpDto: AuthResendOTPDto): Promise<void> {
    return this.service.resendOtp(resendOtpDto.email);
  }

  @ApiOperation({
    summary:
      'Accepts refresh token pased on bosy and returns new access token and refresh token if valid',
  })
  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  async refreshAccessToken(@Body() refreshTokenDto: AuthRefreshAccessTokenDto) {
    return this.service.refreshAccessToken(refreshTokenDto);
  }

  @ApiOperation({ summary: 'First step of password reset' })
  @Post('forgot/password')
  @HttpCode(HttpStatus.NO_CONTENT)
  async forgotPassword(
    @Body() forgotPasswordDto: AuthForgotPasswordDto,
  ): Promise<void> {
    return this.service.forgotPassword(forgotPasswordDto.identifier);
  }

  @ApiOperation({ summary: 'Changes password based on otp provided in body' })
  @Post('reset/password')
  @HttpCode(HttpStatus.NO_CONTENT)
  resetPassword(@Body() resetPasswordDto: AuthResetPasswordDto): Promise<void> {
    return this.service.resetPassword(
      resetPasswordDto.token,
      resetPasswordDto.password,
    );
  }

  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Returns user details based on jwt passed on authorization header',
  })
  @SerializeOptions({
    groups: ['me'],
  })
  @Get('me')
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.OK)
  public me(@Request() request): Promise<NullableType<User>> {
    return this.service.me(request.user);
  }

  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Updates user details based on properties that are sent in body',
  })
  @SerializeOptions({
    groups: ['me'],
  })
  @Patch('me')
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.OK)
  public update(
    @Request() request,
    @Body() userDto: AuthUpdateDto,
  ): Promise<NullableType<User>> {
    return this.service.update(request.user, userDto);
  }

  @ApiOperation({ summary: 'Runs soft delete operation on user' })
  @ApiBearerAuth()
  @Delete('me')
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.NO_CONTENT)
  public async delete(@Request() request): Promise<void> {
    return this.service.softDelete(request.user);
  }
}
