import { Get, JsonController } from 'routing-controllers';
import { GetAllSchedules } from '../models/schedules';

@JsonController()
export class SchedulesController {
    @Get('/schedules')
    async get() {
        const value = await GetAllSchedules();
        return value ? JSON.parse(value) : value;
    }
}
