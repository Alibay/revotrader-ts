import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { SiteModule } from './site/site.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot(),

    UserModule,
    ProductModule,
    SiteModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
