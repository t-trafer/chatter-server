import { IsNotEmpty, IsNumber, IsString, Length } from 'class-validator';

export class CreateQuizDto {
  // @IsNotEmpty()
  // id: number;

  @Length(3, 16)
  title: string;

  @IsNotEmpty()
  description: string;

  @IsString()
  options: string;

  @IsNumber()
  answer: number;
}
