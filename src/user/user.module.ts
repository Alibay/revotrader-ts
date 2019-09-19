import { Module } from '@nestjs/common';
import AuthController from './controller/auth.controller';
import User from './entity/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import UserService from './service/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  exports: [TypeOrmModule],
  controllers: [AuthController],
  providers: [
    UserService,
  ],
})
export class UserModule {}
