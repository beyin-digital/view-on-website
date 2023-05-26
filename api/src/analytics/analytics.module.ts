import { Module } from '@nestjs/common';
import { AnalyticsController } from './analytics.controller';
import { AnalyticsService } from './analytics.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KeywordViewCount } from './entities/keyword-count.entity';
import { Keyword } from 'src/keywords/entities/keyword.entity';
import { AnalyticsGateway } from './analytics.gateway';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([KeywordViewCount]),
    TypeOrmModule.forFeature([Keyword]),
    UsersModule,
  ],
  controllers: [AnalyticsController],
  providers: [AnalyticsService, AnalyticsGateway],
  exports: [AnalyticsService],
})
export class AnalyticsModule {}
