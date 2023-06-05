import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Refresh } from './entities/refresh.entity';
import { RefreshService } from './refresh.service';

@Module({
  imports: [TypeOrmModule.forFeature([Refresh])],
  providers: [RefreshService],
  exports: [RefreshService],
})
export class RefreshModule {}
