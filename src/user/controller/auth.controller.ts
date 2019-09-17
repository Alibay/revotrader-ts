import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export default class AuthController {

  @Get('/login')
  @Render('user/login')
  public loginView() {
    return {};
  }
}
