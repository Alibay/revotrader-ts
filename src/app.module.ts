import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { SiteModule } from './site/site.module';
import { ConfigModule } from './config/config.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot(),

    UserModule,
    ProductModule,
    SiteModule,
    ConfigModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
