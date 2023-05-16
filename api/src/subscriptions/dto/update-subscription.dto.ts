import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateSubscriptionDto {
  @IsString()
  @IsNotEmpty()
  stripeCustomerId?: string;

  @IsString()
  @IsNotEmpty()
  subscriptionId?: string;

  @IsString()
  @IsNotEmpty()
  subscriptionStatus?: string;

  @IsNumber()
  renewalDate?: number;

  @IsString()
  @IsNotEmpty()
  letters?: string;

  @IsString()
  duration?: string;
}
