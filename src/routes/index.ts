import { Get, Controller } from 'routing-controllers';

@Controller()
export class IndexController {
    @Get('/')
    get() {
        return 'splatoon3 unofficial api.';
    }
}
