import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateCheckoutSessionDto {
  @IsString()
  @IsNotEmpty()
  letters: string;

  @IsString()
  @IsNotEmpty()
  sublink: string;

  @IsString()
  @IsOptional()
  interval: string;

  @IsString()
  @IsNotEmpty()
  stripeCustomerId: string;
}
