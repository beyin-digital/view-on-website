import { Module } from '@nestjs/common';
import { StripeController } from './stripe.controller';
import { ConfigModule } from '@nestjs/config';
import { StripeService } from './stripe.service';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [ConfigModule, UsersModule],
  controllers: [StripeController],
  providers: [StripeService],
  exports: [StripeService],
})
export class StripeModule {}
