import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { SubscriptionsModule } from 'src/subscriptions/subscriptions.module';
import { KeywordsModule } from 'src/keywords/keywords.module';
import { StripeModule } from 'src/stripe/stripe.module';
import { UsersModule } from 'src/users/users.module';
import { OrdersModule } from 'src/orders/orders.module';

@Module({
  imports: [
    KeywordsModule,
    SubscriptionsModule,
    StripeModule,
    UsersModule,
    OrdersModule,
  ],
  providers: [PaymentService],
  controllers: [PaymentController],
})
export class PaymentModule {}
