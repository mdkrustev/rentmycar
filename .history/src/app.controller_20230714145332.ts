import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/api/users')
  getUsers(): string {
    return this.appService.getUsers();
  }

  @Get('/api/new/user')
  newUser(): string {
    return this.appService.getUsers();
  }
}
