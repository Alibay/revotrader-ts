import { Controller, Get, Render, Post } from '@nestjs/common';

@Controller()
export default class AuthController {

  @Get('/login')
  @Render('user/login')
  public loginView() {
    return {};
  }

  @Get('/registration')
  @Render('user/registration')
  public registrationView() {
    return {};
  }

  @Post('/registration')
  public registration() {
    return {};
  }

  @Get('/forgot-password')
  @Render('user/forgot-password')
  public forgotPasswordView() {
    return {};
  }

  @Post('/forgot-password')
  public forgotPassword() {
    return {};
  }
}
