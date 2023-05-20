import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { User } from 'src/users/entities/user.entity';

export class CreateOrderDto {
  @IsNotEmpty()
  user: User;

  @IsNotEmpty()
  @IsString()
  keyword?: string;

  @IsNotEmpty()
  @IsString()
  sublink?: string;

  @IsNotEmpty()
  @IsString()
  checkoutSessionId: string;

  @IsNotEmpty()
  @IsString()
  fulfilmentStatus?: string;

  @IsNotEmpty()
  @IsString()
  subscriptionId?: string;

  @IsNotEmpty()
  @IsNumber()
  total?: number;

  @IsNumber()
  @IsOptional()
  subTotal?: number;

  @IsNumber()
  @IsOptional()
  discount?: number;

  @IsString()
  @IsOptional()
  discountCode?: string;
}
