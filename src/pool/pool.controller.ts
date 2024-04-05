import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Ip,
} from '@nestjs/common';
import { PoolService } from './pool.service';
import { CreatePoolDto } from './dto/create-pool.dto';
import { UpdatePoolDto } from './dto/update-pool.dto';

@Controller('pool')
export class PoolController {
  constructor(private readonly poolService: PoolService) {}

  @Post()
  create(@Ip() ip: CreatePoolDto['ip']) {
    return this.poolService.create(ip);
  }

  @Get()
  findAll() {
    return this.poolService.findAll();
  }

  @Get('/self')
  find(@Ip() ip: CreatePoolDto['ip']) {
    return this.poolService.findOne(ip);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePoolDto: UpdatePoolDto) {
  //   return this.poolService.update(+id, updatePoolDto);
  // }

  @Delete()
  remove(@Ip() ip: string) {
    return this.poolService.remove(ip);
  }

  @Get('/exists')
  checkActive(@Ip() ip: string) {
    return this.poolService.checkExists(ip);
  }
}
