import { Module } from '@nestjs/common';
import { AnalyticsController } from './analytics.controller';
import { AnalyticsService } from './analytics.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KeywordViewCount } from './entities/keyword-count.entity';
import { Keyword } from 'src/keywords/entities/keyword.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([KeywordViewCount]),
    TypeOrmModule.forFeature([Keyword]),
  ],
  controllers: [AnalyticsController],
  providers: [AnalyticsService],
  exports: [AnalyticsService],
})
export class AnalyticsModule {}