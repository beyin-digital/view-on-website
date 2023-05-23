import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class UpdateKeywordDto {
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
  @IsNotEmpty()
  location: any;
}
