import UserService from './user.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export default class AuthService {
  constructor(private readonly userService: UserService) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findOneByUsername(username);
    if (user) {
      const { password, ...fields } = user;
      return fields;
    }

    return null;
  }
}
