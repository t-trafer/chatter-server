import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Connection {
  @PrimaryGeneratedColumn()
  id: string;
}
