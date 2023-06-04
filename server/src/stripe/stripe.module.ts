import { Module } from '@nestjs/common';
import { StripeService } from './stripe.service';
import { OrdersModule } from 'src/orders/orders.module';
import { SubscriptionsModule } from 'src/subscriptions/subscriptions.module';
import { KeywordsModule } from 'src/keywords/keywords.module';
import { UsersModule } from 'src/users/users.module';
import { StripeController } from './stripe.controller';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KeywordViewCount } from 'src/analytics/entities/keyword-view.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([KeywordViewCount]),
    ConfigModule,
    OrdersModule,
    SubscriptionsModule,
    KeywordsModule,
    UsersModule,
  ],
  providers: [StripeService],
  exports: [StripeService],
  controllers: [StripeController],
})
export class StripeModule {}
