import { Module } from '@nestjs/common';
import { StripeController } from './stripe.controller';
import { ConfigModule } from '@nestjs/config';
import { StripeService } from './stripe.service';
import { UsersModule } from 'src/users/users.module';
import { OrdersModule } from 'src/orders/orders.module';
import { SubscriptionsModule } from 'src/subscriptions/subscriptions.module';
import { KeywordsModule } from 'src/keywords/keywords.module';

@Module({
  imports: [
    ConfigModule,
    UsersModule,
    OrdersModule,
    SubscriptionsModule,
    KeywordsModule,
  ],
  controllers: [StripeController],
  providers: [StripeService],
  exports: [StripeService],
})
export class StripeModule {}
