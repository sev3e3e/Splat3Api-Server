// require for routing-controllers
import 'reflect-metadata';

import { IndexController } from './routes';
import express from 'express';
import rateLimit from 'express-rate-limit';
import { createServer } from 'https';
import { readFileSync } from 'fs';
import { useExpressServer } from 'routing-controllers';
import { SchedulesController } from './routes/schedules';
import { RedisClient } from './redisClient';

import { XRankingsController } from './routes/xrankings';

import * as dotenv from 'dotenv';
dotenv.config();

const host = '0.0.0.0';
const port = 80;

const app = express();

app.disable('x-powered-by');

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

// https
const tlsServer = createServer(
    {
        key: readFileSync(process.env.TLS_KEY || ''),
        cert: readFileSync(process.env.TLS_CERT || ''),
    },
    app
);

await RedisClient.connect();

app.listen(port, host, () => {
    console.log(`⚡️ Server is running on http://localhost:${port}`);
});

tlsServer.listen(443, () => {
    console.log('⚡️ TLS Server is running! you can access https://localhost:443');
});
