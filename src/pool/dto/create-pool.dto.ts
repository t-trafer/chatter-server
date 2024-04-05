import { IsIP } from 'class-validator';

export class CreatePoolDto {
  @IsIP()
  ip: string;
}
