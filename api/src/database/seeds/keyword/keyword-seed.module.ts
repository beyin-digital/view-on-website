import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Keyword } from 'src/keywords/entities/keyword.entity';
import { KeywordSeedService } from './keyword-seed.service';

@Module({
  imports: [TypeOrmModule.forFeature([Keyword])],
  providers: [KeywordSeedService],
  exports: [KeywordSeedService],
})
export class KeywordSeedModule {}
