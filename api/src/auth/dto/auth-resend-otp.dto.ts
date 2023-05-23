import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class AuthResendOTPDto {
  @ApiProperty({
    example: 'test1@example.com',
    description: "User's email address",
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
