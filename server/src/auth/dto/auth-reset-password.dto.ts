import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Matches } from 'class-validator';

export class AuthResetPasswordDto {
  @ApiProperty({
    example: 'newPasswrod1234*',
    description: "user's new password",
  })
  @Matches(
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^*&+=])(?=\S+$).{8,}$/,
    {
      message: 'password_too_weak_or_does_not_requirement',
    },
  )
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    example: 'arr3rc2349rb9bg9q3t(uq8hfq',
    description: 'Hash that you get from the link sent in email',
  })
  @IsNotEmpty()
  hash: string;
}
