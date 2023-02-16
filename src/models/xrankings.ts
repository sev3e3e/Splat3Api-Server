import { RedisClient } from '../redisClient';

async function get(name: string) {
    const value = await RedisClient.get(name);
    return value;
}

export class XRanking {
    static async getAll() {
        return get('AllXRankings');
    }
    static async getArea() {
        return get('AreaXRankings');
    }
    static async getClam() {
        return get('ClamXRankings');
    }
    static async getRainmaker() {
        return get('RainmakerXRankings');
    }
    static async getTower() {
        return get('TowerXRankings');
    }
}
