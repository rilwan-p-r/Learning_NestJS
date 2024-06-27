import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller()
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get('userworld')
    getuserWorld(): string {
        return this.userService.getuserWorld()
    }
    @Get('userhouse')
    getuserHouse():string{
        return this.userService.getuserHouse()
    }

    @Get('usercar')
    getuserCar():string{
        return this.userService.getuserCar()
    }
}
