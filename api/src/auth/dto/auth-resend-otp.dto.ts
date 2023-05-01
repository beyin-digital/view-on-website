import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class AuthResendOTPDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
