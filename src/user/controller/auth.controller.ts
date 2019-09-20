import { Controller, Get, Render, Post } from '@nestjs/common';
import { AuthService } from '../service/auth.service';

@Controller()
export default class AuthController {

  constructor(
    private readonly authService: AuthService
  ) {}

  @Get('/login')
  @Render('user/login')
  public loginView() {
    return {};
  }

  @Post('/login')
  public login() {

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
