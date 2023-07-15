import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hi agai!';
  }

  getUsers(): string {
    return 'Users list here';
  }

  
}
