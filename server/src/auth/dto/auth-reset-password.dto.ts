import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class AuthResetPasswordDto {
  @ApiProperty({
    example: 'newPasswqrod1234*',
    description: "user's new password",
  })
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    example: 'arr3rc2349rb9bg9q3t(uq8hfq',
    description: 'Hash that you get from the link sent in email',
  })
  @IsNotEmpty()
  hash: string;
}
