import { Injectable } from '@nestjs/common';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Quiz } from './entities/quiz.entity';
import { Repository } from 'typeorm';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(Quiz)
    private readonly quizRepository: Repository<Quiz>
  ) {}

  async create(createQuizDto: CreateQuizDto): Promise<any> {
    return this.quizRepository.save(createQuizDto);
  }

  findAll(): Promise<Quiz[]> {
    return this.quizRepository.find();
  }

  findOne(id: number) {
    return this.quizRepository.findOneBy({ id });
  }

  update(id: number, updateQuizDto: UpdateQuizDto) {
    return `This action updates a #${id} quiz`;
  }

  remove(id: number) {
    return `This action removes a #${id} quiz`;
  }
}
