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
  @ApiProperty({ example: 'test1@example.com' })
  @Transform(lowerCaseTransformer)
  @Validate(IsNotExist, ['User'], {
    message: 'email_already_exists',
  })
  @IsEmail()
  email: string;

  @ApiProperty()
  @MinLength(8)
  @IsNotEmpty()
  @Matches(
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^*&+=])(?=\S+$).{8,}$/,
    {
      message: 'password_too_weak_or_does_not_requirement',
    },
  )
  password: string;

  @ApiProperty({ example: 'Imran Ali', description: "User's full name" })
  @IsNotEmpty()
  @MinLength(3)
  //   add regex for full name with space in the middle
  @Matches(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/, {
    message: 'full_name_invalid_or_missing',
  })
  fullName: string;
}
