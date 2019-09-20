import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entity/product.entity';
import ProductService from './service/product.service';
import ProductController from './controller/product.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],  
  exports: [TypeOrmModule],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
