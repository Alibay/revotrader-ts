import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import User from '../entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export default class UserService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  findOneByUsername(username: string) {
    return this.userRepository.findOne({
      email: username,
    });
  }
}
