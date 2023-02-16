// require for routing-controllers
import 'reflect-metadata';

import { IndexController } from './routes';
import express from 'express';
import { useExpressServer } from 'routing-controllers';
import { SchedulesController } from './routes/schedules';
import { RedisClient } from './redisClient';

import rateLimit from 'express-rate-limit';
import { XRankingsController } from './routes/xrankings';

const port = process.env.PORT || 8000;

const app = express();

// 100 requests per 10 minutes.
const rateLimitter = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
});

app.use(rateLimitter);

useExpressServer(app, {
    controllers: [IndexController, SchedulesController, XRankingsController],
    development: false,
});

await RedisClient.connect();

app.listen(port, () => {
    console.log(`⚡️ Server is running on localhost:${port}`);
});
