import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class UpdateKeywordDto {
  @ApiProperty({
    example: {
      state: 'California',
      country: 'United States',
    },
  })
  @IsOptional()
  location?: any;

  @ApiProperty({ example: 'https://hellword.com', description: 'sublink' })
  @IsOptional()
  sublink?: string;

  @ApiProperty({
    example: 'ACE Corp',
    description: 'Organisation associated with the keyword',
  })
  @IsOptional()
  organisation?: string;
}
