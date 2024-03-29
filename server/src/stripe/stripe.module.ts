import { Module } from '@nestjs/common';
import { StripeService } from './stripe.service';
import { OrdersModule } from 'src/orders/orders.module';
import { SubscriptionsModule } from 'src/subscriptions/subscriptions.module';
import { KeywordsModule } from 'src/keywords/keywords.module';
import { UsersModule } from 'src/users/users.module';
import { StripeController } from './stripe.controller';
import { ConfigModule } from '@nestjs/config';
import { MailModule } from 'src/mail/mail.module';

@Module({
  imports: [
    ConfigModule,
    OrdersModule,
    SubscriptionsModule,
    KeywordsModule,
    UsersModule,
    MailModule,
  ],
  providers: [StripeService],
  exports: [StripeService],
  controllers: [StripeController],
})
export class StripeModule {}
