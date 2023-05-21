import { Module } from '@nestjs/common';
import { KeywordsController } from './keywords.controller';
import { KeywordsService } from './keywords.service';
import { Keyword } from './entities/keyword.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IsExist } from 'src/utils/validators/is-exists.validator';
import { IsNotExist } from 'src/utils/validators/is-not-exists.validator';
import { UsersModule } from 'src/users/users.module';
import { AnalyticsModule } from 'src/analytics/analytics.module';

@Module({
  imports: [TypeOrmModule.forFeature([Keyword]), UsersModule, AnalyticsModule],
  controllers: [KeywordsController],
  providers: [IsExist, IsNotExist, KeywordsService],
  exports: [KeywordsService],
})
export class KeywordsModule {}
