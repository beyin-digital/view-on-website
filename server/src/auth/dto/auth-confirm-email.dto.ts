import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class AuthConfirmEmailDto {
  @ApiProperty({ example: '123456', description: 'OTP sent to email' })
  @IsNotEmpty()
  @IsString()
  otp: string;
}
