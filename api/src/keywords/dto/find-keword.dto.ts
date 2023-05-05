import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { Validate } from 'class-validator';
import { lowerCaseTransformer } from 'src/utils/transformers/lower-case.transformer';
import { IsExist } from 'src/utils/validators/is-exists.validator';

export class FindKeywordDto {
  @ApiProperty({ example: 'Keyword' })
  @Transform(lowerCaseTransformer)
  @Validate(IsExist, ['Keyword'], {
    message: 'keyword does not exist',
  })
  keyword: string;
}
