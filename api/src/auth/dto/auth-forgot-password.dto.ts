import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';
import { Transform } from 'class-transformer';
import { lowerCaseTransformer } from 'src/utils/transformers/lower-case.transformer';

export class AuthForgotPasswordDto {
  @ApiProperty({
    example: 'test1@example.com',
    description: "User's email address",
  })
  @Transform(lowerCaseTransformer)
  @IsEmail()
  email: string;
}
