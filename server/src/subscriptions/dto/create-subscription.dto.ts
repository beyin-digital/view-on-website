import { IsNotEmpty, IsString, Matches } from 'class-validator';
import { User } from 'src/users/entities/user.entity';

export class CreateSubscriptionDto {
  @IsString()
  @IsNotEmpty()
  @Matches(/^[^$#.%\s]*$/, {
    message: 'Keyword cannot contain any spaces or dots',
  })
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
