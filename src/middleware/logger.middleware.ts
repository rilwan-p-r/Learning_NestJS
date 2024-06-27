import { Injectable, NestMiddleware} from "@nestjs/common";
import { Request,Response,NextFunction } from "express";

// @Injectable()
// export class loggerMiddleware implements NestMiddleware{     //class middlware
//     use(req: Request, res: Response, next:NextFunction) {
//         console.log(`logging...`);
//         next()
//     }
// }

export function logger(req:Request,res:Response,next:NextFunction){      //functional middleware
    console.log('logging....');
    next()
}
