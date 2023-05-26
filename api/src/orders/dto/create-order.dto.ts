import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator';
import { User } from 'src/users/entities/user.entity';

export class CreateOrderDto {
  @IsNotEmpty()
  user: User;

  @IsNotEmpty()
  @IsString()
  keyword?: string;

  @IsNotEmpty()
  @IsString()
  @IsUrl()
  sublink?: string;

  @IsNotEmpty()
  @IsString()
  checkoutSessionId: string;

  @IsOptional()
  @IsString()
  invoiceId?: string;

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
