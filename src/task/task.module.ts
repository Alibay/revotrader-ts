import { Module } from '@nestjs/common';
import { TaskService } from './service/task.service';

@Module({
  providers: [
    TaskService,
  ],
})
export class TaskModule {}
