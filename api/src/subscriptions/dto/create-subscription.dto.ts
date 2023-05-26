import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateSubscriptionDto {
  @ApiProperty({
    example: 'cus_Nwm3mQDOBmEegT',
    description: 'stripe id attached to user in database',
  })
  @IsString()
  @IsNotEmpty()
  stripeCustomerId: string;

  @ApiProperty({ example: 200, description: 'Price of the subscription' })
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @ApiProperty({
    example: 'active',
    description: 'subscription status updated by stripe webhooks',
  })
  @IsString()
  @IsNotEmpty()
  subscriptionStatus?: string;

  @ApiProperty({
    example: '1614556800',
    description: 'subscription creation date returned from stripe',
  })
  @IsNumber()
  @IsNotEmpty()
  purchaseDate: number;

  @ApiProperty({
    example: 'hello world',
    description: 'keyword user intends to purchase',
  })
  @IsString()
  @IsNotEmpty()
  letters?: string;

  @ApiProperty({
    example: 'sub_1NAaqhBs9zGaVmNDaF0K8OQn',
    description: 'subscription id returned from stripe',
  })
  @IsString()
  stripeSubscriptionId?: string;
}
