import { Keyword } from 'src/keywords/entities/keyword.entity';
import { User } from 'src/users/entities/user.entity';

export class CreateSubscriptionDto {
  price: number;

  user: User;

  keyword: Keyword;

  subscriptionId: string;
}
