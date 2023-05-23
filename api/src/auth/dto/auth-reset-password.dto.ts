import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class AuthResetPasswordDto {
  @ApiProperty({
    example: 'secretPassword1234*',
    description: 'New password',
  })
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    example: '123456',
    description: "OTP token which was sent to user's email",
  })
  @IsNotEmpty()
  hash: string;
}
