import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class AuthConfirmEmailDto {
  @ApiProperty({
    example: '123456',
    description: "OTP token which was sent to the user's email",
  })
  @IsNotEmpty()
  otp: string;
}
