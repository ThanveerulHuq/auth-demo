import { HttpStatus, Injectable } from '@nestjs/common';
import { Message } from '@auth-demo/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
