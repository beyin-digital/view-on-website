import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Matches } from 'class-validator';

export class AuthResetPasswordDto {
  @ApiProperty({
    example: 'secretPassword1234*',
    description: 'New password',
  })
  @IsNotEmpty()
  @Matches(
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^*&+=])(?=\S+$).{8,}$/,
    {
      message: 'password_too_weak_or_does_not_requirement',
    },
  )
  password: string;

  @ApiProperty({
    example: '123456',
    description: "OTP token which was sent to user's email",
  })
  @IsNotEmpty()
  token: string;
}
