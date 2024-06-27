import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getName(): string {
    return 'helooo';
  }
  checkEvenOdd(number: number): string {
    return number%2===0 ? 'number is even' : 'number is odd'
  }
  checkEvenOddparams(number:number):string{
    return number%2===0 ? `${number} number is even` : `${number} number is odd`
  }
}
