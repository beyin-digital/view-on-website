import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MinLength, Validate } from 'class-validator';
import { IsExist } from 'src/utils/validators/is-exists.validator';
import { Transform } from 'class-transformer';
import { lowerCaseTransformer } from 'src/utils/transformers/lower-case.transformer';

export class AuthEmailLoginDto {
  @ApiProperty({ example: 'test1@example.com||hello world' })
  @Transform(lowerCaseTransformer)
  @Validate(IsExist, ['User', 'Keyword'], {
    message: 'email or keyword does not exist',
  })
  identifier: string;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(8)
  password: string;
}
