import { Injectable } from '@nestjs/common';
import { CreatePoolDto } from './dto/create-pool.dto';
import { UpdatePoolDto } from './dto/update-pool.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Pool } from './entities/pool.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PoolService {
  constructor(
    @InjectRepository(Pool)
    private readonly poolRepository: Repository<Pool>
  ) {}

  create(id: CreatePoolDto['ip']) {
    return this.poolRepository.save({ id, connected: false });
  }

  findAll() {
    return this.poolRepository.find();
  }

  findOne(id: string) {
    return this.poolRepository.findOneBy({ id });
  }

  // update(id: number, updatePoolDto: UpdatePoolDto) {
  //   return `This action updates a #${id} pool`;
  // }

  remove(id: string) {
    return this.poolRepository.delete([id]);
  }

  checkExists(id: string) {
    return this.poolRepository.exist({ where: { id } });
  }
}
