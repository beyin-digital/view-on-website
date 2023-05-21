import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsUrl,
} from 'class-validator';
import { lowerCaseTransformer } from 'src/utils/transformers/lower-case.transformer';
import { LocationData } from 'src/utils/types/location.type';

export class CreateKeywordDto {
  @ApiProperty({ example: 'Hello World' })
  @Transform(lowerCaseTransformer)
  @IsNotEmpty()
  letters: string;

  @ApiProperty({ example: 'https://helloworld.com' })
  @Transform(lowerCaseTransformer)
  @IsNotEmpty()
  @IsUrl()
  sublink: string;

  @ApiProperty({
    example: {
      state: 'California',
      country: 'United States',
      coordinates: {
        lat: 34.052235,
        lng: -118.243683,
      },
    },
  })
  @IsObject()
  @IsOptional()
  location?: LocationData;

  @ApiProperty({ example: 2000 })
  @IsNumber()
  price: number;
}
