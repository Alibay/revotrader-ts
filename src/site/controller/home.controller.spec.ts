import { Test, TestingModule } from '@nestjs/testing';
import HomeController from './home.controller';

describe('AppController', () => {
  let homeController: HomeController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HomeController],
      providers: [],
    }).compile();

    homeController = app.get<HomeController>(HomeController);
  });
});
