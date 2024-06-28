import { HttpException, HttpStatus } from "@nestjs/common"

export class customException extends HttpException{
    constructor(){{
        super('custom error',HttpStatus.BAD_REQUEST)
    }}
}