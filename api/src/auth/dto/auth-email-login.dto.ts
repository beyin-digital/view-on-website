import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MinLength, Validate } from 'class-validator';
import { IsExist } from 'src/utils/validators/is-exists.validator';
import { Transform } from 'class-transformer';
import { lowerCaseTransformer } from 'src/utils/transformers/lower-case.transformer';

export class AuthEmailLoginDto {
  @ApiProperty({
    example: 'test1@example.com||hello world',
    description:
      "Identifier which is either a user's email or keyword they've purchased",
  })
  @Transform(lowerCaseTransformer)
  @Validate(IsExist, ['User', 'Keyword'], {
    message: 'email or keyword does not exist',
  })
  identifier: string;

  @ApiProperty({
    example: 'secretPassword123*',
    description: "User's password",
  })
  @IsNotEmpty()
  @MinLength(8)
  password: string;
}
