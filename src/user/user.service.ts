import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    getuserWorld():string{
        return 'helo user world'
    }
    getuserHouse():string{
        return 'helo user house'
    }
    getuserCar():string{
        return 'helo user car'
    }
}
