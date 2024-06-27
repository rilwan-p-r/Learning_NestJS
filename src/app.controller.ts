import { Controller, Get, HttpCode, Param, Post, Query, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('/user')
  @HttpCode(400)
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('ab*cd')
  getName(@Req() request: Request): string {
    console.log('userrrr');

    return this.appService.getName();
  }
  @Post('addname')
  addName(): string {
    return 'new name added'
  }

  @Get('check')
  checkEvenOdd(@Query('numbers') number:number): string{   //check even and odd number in query
    return this.appService.checkEvenOdd(number)
  }

  @Get('isEven/:number')
  checkEvenOddparams(@Param('number') number:number):string{  //check even or odd in params
    return this.appService.checkEvenOddparams(number)
  }

}
