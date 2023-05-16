import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subscription } from './entities/subscription.entity';
import { SubscriptionsController } from './subscriptions.controller';
import { IsExist } from 'src/utils/validators/is-exists.validator';
import { IsNotExist } from 'src/utils/validators/is-not-exists.validator';
import { SubscriptionsService } from './subscriptions.service';
import { UsersModule } from 'src/users/users.module';
import { KeywordsModule } from 'src/keywords/keywords.module';
import { OrdersModule } from 'src/orders/orders.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Subscription]),
    UsersModule,
    KeywordsModule,
    OrdersModule,
  ],
  controllers: [SubscriptionsController],
  providers: [IsExist, IsNotExist, SubscriptionsService],
  exports: [SubscriptionsService],
})
export class SubscriptionsModule {}
