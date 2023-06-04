import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { User } from 'src/users/entities/user.entity';

export class CreateOrderDto {
  @IsString()
  checkoutSessionId: string;

  @IsNotEmpty()
  user: User;

  @IsNotEmpty()
  status: string;

  @IsNumber()
  amount: number;
}
