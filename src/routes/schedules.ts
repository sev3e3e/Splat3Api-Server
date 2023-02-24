import { Get, JsonController } from 'routing-controllers';
import { Schedule } from '../models/schedules';

@JsonController()
export class SchedulesController {
    @Get('/schedules')
    async getAllSchedules() {
        const value = await Schedule.getAll();
        return value ? JSON.parse(value) : value;
    }

    // バンカラマッチ
    @Get('/schedules/bankara/open')
    async getBankaraOpenSchedule() {
        const value = await Schedule.getBankaraOpen();
        return value ? JSON.parse(value) : value;
    }

    @Get('/schedules/bankara/challenge')
    async getBankaraChallengeSchedule() {
        const value = await Schedule.getBankaraChallenge();
        return value ? JSON.parse(value) : value;
    }

    // Xマッチ
    @Get('/schedules/xbattle')
    async getXBattleSchedule() {
        const value = await Schedule.getXBattle();
        return value ? JSON.parse(value) : value;
    }

    // レギュラーマッチ
    @Get('/schedules/regular')
    async getRegularSchedule() {
        const value = await Schedule.getRegular();
        return value ? JSON.parse(value) : value;
    }

    // サーモンラン
    @Get('/schedules/salmon')
    async getSalmonRunSchedule() {
        const value = await Schedule.getSalmonRun();
        return value ? JSON.parse(value) : value;
    }
}
