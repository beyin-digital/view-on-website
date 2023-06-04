import { PartialType } from '@nestjs/swagger';
import { CreateKeywordDto } from './create-keyword.dto';

import { Transform } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { lowerCaseTransformer } from 'src/utils/transformers/lower-case.transformer';

export class UpdateKeywordDto extends PartialType(CreateKeywordDto) {
  @ApiProperty({
    example: 'https://helloworld.com',
    description: 'Sublink to be attached to keyword',
  })
  @Transform(lowerCaseTransformer)
  @IsNotEmpty()
  @IsOptional()
  sublink?: string;

  @IsString()
  @IsOptional()
  organisation?: string;

  @IsString()
  @IsOptional()
  country?: string;

  @IsString()
  @IsOptional()
  state?: string;
}
