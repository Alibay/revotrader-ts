import { Module } from '@nestjs/common';
import HomeController from './controller/home.controller';

@Module({
  controllers: [HomeController],
  providers: [],
})
export class SiteModule {}
