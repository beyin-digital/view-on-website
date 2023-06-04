import { IsNotEmpty, IsString } from 'class-validator';
import { User } from 'src/users/entities/user.entity';

export class CreateSubscriptionDto {
  @IsString()
  @IsNotEmpty()
  letters: string;

  @IsNotEmpty()
  user: User;

  @IsNotEmpty()
  stripeSubscriptionId: string;

  @IsNotEmpty()
  purchaseAmount: number;

  @IsNotEmpty()
  purchaseDate: Date;

  @IsNotEmpty()
  invoiceId: string;
}
