import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Validate } from 'class-validator';
import { IsExist } from 'src/utils/validators/is-exists.validator';
import { Transform } from 'class-transformer';
import { lowerCaseTransformer } from 'src/utils/transformers/lower-case.transformer';

export class AuthResendMailDto {
  @ApiProperty({
    example: 'test1@example.com',
    description: "User's email",
  })
  @Transform(lowerCaseTransformer)
  @Validate(IsExist, ['User'], {
    message: 'email_not_found',
  })
  @IsNotEmpty()
  email: string;
}
