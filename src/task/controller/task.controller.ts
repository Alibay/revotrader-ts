import { TaskService } from '../service/task.service';
import { Controller } from '@nestjs/common';

@Controller()
export class TaskController {
  constructor(private readonly taskService: TaskService) {}
}
