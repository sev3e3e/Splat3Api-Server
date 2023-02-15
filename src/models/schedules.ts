import { RedisClient } from '../redisClient';

async function get(name: string) {
    const value = await RedisClient.get(name);
    return value;
}

export class Schedule {
    static async getAll() {
        return get('Schedules');
    }

    static async getBankaraOpen() {
        return get('bankara_open_schedule');
    }
    static async getBankaraChallenge() {
        return get('bankara_challenge_schedule');
    }
    static async getSalmonRun() {
        return get('salmon_run_schedule');
    }
    static async getXBattle() {
        return get('x_battle_schedule');
    }
    static async getRegular() {
        return get('regular_schedule');
    }
}
