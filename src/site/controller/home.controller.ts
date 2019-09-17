import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export default class HomeController {

  @Get('/')
  @Render('homepage')
  public async homepage() {
    return { message: 'my message' };
  }
}
