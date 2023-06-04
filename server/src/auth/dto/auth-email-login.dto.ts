import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Matches, MinLength, Validate } from 'class-validator';
import { IsExist } from 'src/utils/validators/is-exists.validator';
import { Transform } from 'class-transformer';
import { lowerCaseTransformer } from 'src/utils/transformers/lower-case.transformer';

export class AuthEmailLoginDto {
  @ApiProperty({
    example: 'test1@example.com || hello world',
    description: "User's email or keywrod they've purchased",
  })
  @Transform(lowerCaseTransformer)
  @Validate(IsExist, ['User', 'Keyword'], {
    message: 'email_or_keyword_not_found',
  })
  @IsNotEmpty()
  identifier: string;

  @ApiProperty({ example: 'testPassword123*', description: "User's password" })
  @MinLength(8)
  @IsNotEmpty()
  @Matches(
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^*&+=])(?=\S+$).{8,}$/,
    {
      message: 'password_too_weak_or_does_not_requirement',
    },
  )
  password: string;
}
