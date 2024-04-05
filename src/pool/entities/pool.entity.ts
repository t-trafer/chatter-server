import { IsBoolean } from 'class-validator';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Generated,
  PrimaryColumn,
  OneToOne,
} from 'typeorm';

@Entity()
export class Pool {
  @PrimaryColumn()
  id: string;

  @IsBoolean()
  connected: boolean;

  @OneToOne()
  connectionId: string;
}
