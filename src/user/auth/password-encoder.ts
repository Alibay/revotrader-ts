import { Injectable } from '@nestjs/common';
import { hash, compare } from 'bcrypt';
import * as config from 'config';

const saltRounds: number = config.get('auth.saltRounds');

@Injectable()
export class PasswordEcoder {
  
  public encode(input: string): Promise<string> {
    return hash(input, saltRounds);
  }

  public compare(plain: string, encrypted: string): Promise<boolean> {
    return compare(plain, encrypted);
  }
}