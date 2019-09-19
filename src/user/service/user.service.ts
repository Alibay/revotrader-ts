import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import User from '../entity/user.entity';
import { Repository } from 'typeorm';
import { NestSchedule, Cron } from 'nest-schedule';
import * as config from 'config';

@Injectable()
export default class UserService extends NestSchedule {

  private readonly logger = new Logger(UserService.name);

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {
    super();
  }

  findOneByUsername(username: string): Promise<User> {
    return this.userRepository.findOne({
      email: username,
    });
  }
}
