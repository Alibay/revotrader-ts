import { NestSchedule, Cron } from 'nest-schedule';
import { Injectable, Logger } from '@nestjs/common';
import * as config from 'config';
import { Repository } from 'typeorm';
import { Product } from '../entity/product.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export default class ProductService extends NestSchedule {

  private readonly logger = new Logger(ProductService.name);

  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {
    super();
  }

  @Cron(config.get('cron.product.parseYml'))
  private async parseYml(): Promise<void> {
    this.logger.debug('parseYml: start');
    await this.productRepository.find();
    this.logger.debug('parseYml: finish');
  }
}
