import { Get, JsonController } from 'routing-controllers';
import { XRanking } from '../models/xrankings';

@JsonController()
export class XRankingsController {
    @Get('/xRankings')
    async getAllXRankings() {
        const value = await XRanking.getAll();
        return value ? JSON.parse(value) : value;
    }

    @Get('/xRankings/area')
    async getAreaXRankings() {
        const value = await XRanking.getArea();
        return value ? JSON.parse(value) : value;
    }

    @Get('/xRankings/tower')
    async getTowerXRankings() {
        const value = await XRanking.getTower();
        return value ? JSON.parse(value) : value;
    }

    @Get('/xRankings/clam')
    async getClamXRankings() {
        const value = await XRanking.getClam();
        return value ? JSON.parse(value) : value;
    }

    @Get('/xRankings/rainmaker')
    async getRainmakerXRankings() {
        const value = await XRanking.getRainmaker();
        return value ? JSON.parse(value) : value;
    }
}
