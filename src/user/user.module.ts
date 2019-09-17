import { Module } from '@nestjs/common';
import AuthController from './controller/auth.controller';
import User from './entity/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [AuthController],
})
export class UserModule {}
