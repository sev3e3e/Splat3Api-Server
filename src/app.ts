// require for routing-controllers
import 'reflect-metadata';

import { IndexController } from './routes';
import express from 'express';
import rateLimit from 'express-rate-limit';
import RedisStore from 'rate-limit-redis';
import { useExpressServer } from 'routing-controllers';
import { SchedulesController } from './routes/schedules';
import { RedisClient } from './redisClient';

import { XRankingsController } from './routes/xrankings';

import * as dotenv from 'dotenv';
dotenv.config();

const host = '0.0.0.0';
const port = 3000;

const app = express();

app.disable('x-powered-by');

await RedisClient.connect();

// 100 requests per 10 minutes.
const rateLimitter = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
    store: new RedisStore({
        sendCommand: (...args: string[]) => RedisClient.sendCommand(args),
    }),
});

app.use(rateLimitter);

useExpressServer(app, {
    controllers: [IndexController, SchedulesController, XRankingsController],
    development: false,
});

app.listen(port, host, () => {
    console.log(`⚡️ Server is running on http://localhost:${port}`);
});
