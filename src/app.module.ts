import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { SiteModule } from './site/site.module';

@Module({
  imports: [UserModule, ProductModule, SiteModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
