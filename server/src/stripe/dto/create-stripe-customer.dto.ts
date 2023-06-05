import { IsEmail, IsString } from 'class-validator';

export class CreateStripeCustomerDto {
  @IsString()
  fullName: string;

  @IsEmail()
  email: string;
}
