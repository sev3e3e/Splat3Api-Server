import { Controller, Param, Body, Get, Post, Put, Delete, JsonController } from 'routing-controllers';

@JsonController()
export class IndexController {
    @Get('/')
    get() {
        return 'index.?';
    }
}
