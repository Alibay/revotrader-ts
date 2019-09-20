import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { SiteModule } from './site/site.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskModule } from './task/task.module';
import * as config from 'config';

const dbConfig = {
  ...config.get('database'),
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
};

@Module({
  imports: [
    TypeOrmModule.forRoot(dbConfig),

    UserModule,
    ProductModule,
    SiteModule,
    TaskModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
