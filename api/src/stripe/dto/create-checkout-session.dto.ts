import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCheckoutSessionDto {
  @IsString()
  @IsNotEmpty()
  letters: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;
}
