import { Cron, NestSchedule } from 'nest-schedule';
import { Injectable, Logger } from '@nestjs/common';
import * as config from 'config';

@Injectable()
export class SchedulerService extends NestSchedule {

  private readonly logger = new Logger(SchedulerService.name);

  @Cron(config.get('cron.deleteDisabledUsers'))
  deleteDisabledUsers() {
    this.logger.log('deleteDisabledUsers: start');
    this.logger.log('deleteDisabledUsers: finish');
  }
}
