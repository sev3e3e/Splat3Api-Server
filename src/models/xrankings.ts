import { RedisClient } from '../redisClient';

export class XRanking {
    static async getAll() {
        return RedisClient.get('AllXRankings');
    }
    static async getArea(from: number, to: number) {
        return RedisClient.zRange('AreaXRankings:data', from, to);
    }
    static async getClam(from: number, to: number) {
        return RedisClient.zRange('ClamXRankings:data', from, to);
    }
    static async getRainmaker(from: number, to: number) {
        return RedisClient.zRange('RainmakerXRankings:data', from, to);
    }
    static async getTower(from: number, to: number) {
        return RedisClient.zRange('TowerXRankings:data', from, to);
    }
}
