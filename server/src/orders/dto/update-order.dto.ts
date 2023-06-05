import { PartialType } from '@nestjs/swagger';
import { CreateOrderDto } from './create-order.dto';
import { IsString } from 'class-validator';
export class UpdateOrderDto extends PartialType(CreateOrderDto) {
  @IsString()
  status: string;
}
