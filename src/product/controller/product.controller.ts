import { Get, Controller } from '@nestjs/common';
import ProductService from '../service/product.service';

@Controller()
export default class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('/product/:id')
  public async getProduct() {
    return 42;
  }
}
