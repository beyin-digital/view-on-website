import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  Matches,
  MinLength,
  Validate,
} from 'class-validator';
import { IsNotExist } from 'src/utils/validators/is-not-exists.validator';
import { Transform } from 'class-transformer';
import { lowerCaseTransformer } from 'src/utils/transformers/lower-case.transformer';

export class AuthRegisterLoginDto {
  @ApiProperty({
    example: 'test1@example.com',
    description: "User's email address",
  })
  @Transform(lowerCaseTransformer)
  @Validate(IsNotExist, ['User'], {
    message: 'email_already_exists',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 'secretPassword123*',
    description: "User's password",
  })
  @MinLength(8)
  @IsNotEmpty()
  @Matches(
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^*&+=])(?=\S+$).{8,}$/,
    {
      message: 'password_too_weak_or_does_not_requirement',
    },
  )
  password: string;

  @ApiProperty({ example: 'John Doe', description: "User's Full name" })
  @IsNotEmpty()
  fullName: string;
}
