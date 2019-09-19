import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { SiteModule } from './site/site.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskModule } from './task/task.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),

    UserModule,
    ProductModule,
    SiteModule,
    TaskModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
