import UserService from './user.service';
import { Injectable } from '@nestjs/common';
import { PasswordEcoder } from '../auth/password-encoder';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly passwordEncoder: PasswordEcoder,
  ) {}

  async validateUser(username: string, plainPassword: string): Promise<any> {
    const user = await this.userService.findOneByUsername(username);
    if (user) {
      return null;
    }

    const verifiedPassword = await this.passwordEncoder.compare(plainPassword, user.password);
    if (verifiedPassword) {
      return null;
    }
    
    const { password, ...fields } = user;
    return fields;
  }
}
