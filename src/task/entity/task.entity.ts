import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users')
export class Task {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  status: number;
}

export enum TaskStatus {
  New = 0,
  InProgress = 1,
  Done = 2,
  Failed = 3,
}

export enum TaskType {
  ImportYml = 0,
}
