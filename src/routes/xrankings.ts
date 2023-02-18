import { BadRequestError, Get, JsonController, QueryParam } from 'routing-controllers';
import { XRanking } from '../models/xrankings';

@JsonController()
export class XRankingsController {
    @Get('/xRankings')
    async getAllXRankings() {
        const value = await XRanking.getAll();
        return value ? JSON.parse(value) : value;
    }

    @Get('/xRankings/area')
    async getAreaXRankings(@QueryParam('from') _from: number, @QueryParam('to') _to: number) {
        if (_from == undefined || _to == undefined) {
            throw new BadRequestError(`Invalid parameters.`);
        }

        let from = _from;
        let to = _to;

        if (to - from > 25) {
            to = from + 25;
        }

        const value = await XRanking.getArea(from, to);
        return value ? value.map((v) => JSON.parse(v)) : value;
    }

    @Get('/xRankings/tower')
    async getTowerXRankings(@QueryParam('from') _from: number, @QueryParam('to') _to: number) {
        if (_from == undefined || _to == undefined) {
            throw new BadRequestError(`Invalid parameters.`);
        }

        let from = _from;
        let to = _to;

        if (to - from > 25) {
            to = from + 25;
        }

        const value = await XRanking.getTower(from, to);
        return value ? value.map((v) => JSON.parse(v)) : value;
    }

    @Get('/xRankings/clam')
    async getClamXRankings(@QueryParam('from') _from: number, @QueryParam('to') _to: number) {
        if (_from == undefined || _to == undefined) {
            throw new BadRequestError(`Invalid parameters.`);
        }

        let from = _from;
        let to = _to;

        if (to - from > 25) {
            to = from + 25;
        }

        const value = await XRanking.getClam(from, to);
        return value ? value.map((v) => JSON.parse(v)) : value;
    }

    @Get('/xRankings/rainmaker')
    async getRainmakerXRankings(@QueryParam('from') _from: number, @QueryParam('to') _to: number) {
        if (_from == undefined || _to == undefined) {
            throw new BadRequestError(`Invalid parameters.`);
        }

        let from = _from;
        let to = _to;

        if (to - from > 25) {
            to = from + 25;
        }

        const value = await XRanking.getRainmaker(from, to);
        return value ? value.map((v) => JSON.parse(v)) : value;
    }
}
