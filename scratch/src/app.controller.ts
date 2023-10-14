import { Controller, Get } from "@nestjs/common";


@Controller('/app')
export class AppController{
    @Get('/abcd')
    GetMethod(){
        return 'Hi there!';
    }
    @Get('/buy')
    GetBuyMethod(){
        return 'Buy there!';
    }
}