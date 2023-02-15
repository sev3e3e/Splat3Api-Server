import { Get, JsonController } from 'routing-controllers';

@JsonController()
export class IndexController {
    @Get('/')
    get() {
        return null;
    }
}
