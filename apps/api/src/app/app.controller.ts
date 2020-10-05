import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';

import { Message } from '@auth-demo/api-interfaces';

import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }

  @Post('login')
  login(@Body() payload: any, @Res() res: Response): { token: string } {
    if (payload.username === 'fake')
      return res.status(HttpStatus.UNAUTHORIZED).json([]);
    return res.status(HttpStatus.OK).json({
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlRoYW52ZWVyIiwiaWF0IjoxNTE2MjM5MDIyfQ.y3BzZYkMOQj5yfeKOMPge1tNYL888TYV7iRL0aclmXc',
    });
  }
}
