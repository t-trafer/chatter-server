import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizModule } from './quiz/quiz.module';
import { PoolModule } from './pool/pool.module';
import { ConnectionModule } from './connection/connection.module';
import { MessageModule } from './message/message.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5050,
      username: 'postgres',
      password: 'hehehaha',
      database: 'quiz',
      entities: [__dirname + '/../dist/**/*.entity.{ts,js}'],
      synchronize: true,
    }),
    QuizModule,
    PoolModule,
    ConnectionModule,
    MessageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
