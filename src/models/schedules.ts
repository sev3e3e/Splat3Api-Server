import { RedisClient } from '../redisClient';

export const GetAllSchedules = async () => {
    const value = await RedisClient.get('Schedules');
    return value;
};
