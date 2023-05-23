import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCheckoutSessionDto {
  @ApiProperty({
    example: 'Hello world',
    description: 'Keyword user wants to purchase',
  })
  @IsString()
  @IsNotEmpty()
  letters: string;

  @ApiProperty({
    example: 'https://www.helloworld.com',
    description:
      'Sublink to be attached to the keyword the user wants to purchase',
  })
  @IsString()
  @IsNotEmpty()
  sublink: string;

  @ApiProperty({
    example: 200,
    description: 'Price of the subscription',
  })
  @IsNumber()
  @IsNotEmpty()
  price: number;

  @ApiProperty({
    example: 'month || 6 months || year',
    description:
      "Duration of user's subscription. The values are per stripe's documentation",
  })
  @IsString()
  @IsNotEmpty()
  interval: string;
}
