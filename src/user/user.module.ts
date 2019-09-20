import { Module } from '@nestjs/common';
import AuthController from './controller/auth.controller';
import User from './entity/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import UserService from './service/user.service';
import { AuthService } from './service/auth.service';
import { LocalStrategy } from './auth/local-strategy';
import { PasswordEcoder } from './auth/password-encoder';

@Module({
  imports: [TypeOrmModule.forFeature([User])],  
  exports: [TypeOrmModule],
  controllers: [AuthController],
  providers: [
    UserService,
    AuthService,
    LocalStrategy,
    PasswordEcoder,
  ],
})
export class UserModule {}
