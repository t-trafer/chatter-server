import { Module } from '@nestjs/common';
import { PoolService } from './pool.service';
import { PoolController } from './pool.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pool } from './entities/pool.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pool])],
  controllers: [PoolController],
  providers: [PoolService],
})
export class PoolModule {}
