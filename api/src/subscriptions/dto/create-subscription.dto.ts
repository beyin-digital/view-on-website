import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateSubscriptionDto {
  @IsString()
  @IsNotEmpty()
  stripeCustomerId: string;

  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @IsString()
  @IsNotEmpty()
  subscriptionId?: string;

  @IsString()
  @IsNotEmpty()
  subscriptionStatus?: string;

  @IsNumber()
  @IsNotEmpty()
  purchaseDate: number;

  @IsString()
  @IsNotEmpty()
  letters?: string;

  @IsString()
  stripeSubscriptionId?: string;
}
