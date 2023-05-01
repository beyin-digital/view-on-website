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
    message: 'emailAlreadyExists',
  })
  @IsEmail()
  email: string;

  @ApiProperty()
  @MinLength(8)
  @IsNotEmpty()

  //   regex for password with letters, special characters and numbers
  // (?=.*[0-9])       # a digit must occur at least once
  // (?=.*[a-z])       # a lower case letter must occur at least once
  // (?=.*[A-Z])       # an upper case letter must occur at least once
  // (?=.*[@#$%^&+=])  # a special character must occur at least once
  // (?=\S+$)          # no whitespace allowed in the entire string
  // .{8,}             # anything, at least eight places though
  @Matches(
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^*&+=])(?=\S+$).{8,}$/,
    {
      message: 'passwordTooWeak',
    },
  )
  password: string;

  @ApiProperty({ example: 'John Doe' })
  @IsNotEmpty()
  fullName: string;
}
