import { IsNotEmpty, IsNumber } from 'class-validator';

export class PaySubscriptionDto {
  @IsNumber()
  @IsNotEmpty()
  keywordId: number;
}
