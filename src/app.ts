import cors from 'cors';
import express from 'express';
import cron from 'node-cron';

import authRouter from './auth/routes/auth.routes';
import { sendRouter, sexRouter } from './core/routes';
import locationRouter from './core/routes/location/location.routes';
import naturalHoseRouter from './core/routes/natural-hose/natural-hose.routes';
import sphipmentOrdersRouter from './sphipment-orders/router/sphipment-orders.router';
import userRouter from './users/routes/user.routes';

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// execute cron
cron.schedule('0 0 0 * * *', function () {
  console.log('run every day at 12:00 AM');
});

// auth routes
app.use('/auth', authRouter);

// user routes
app.use('/user', userRouter);

// sphipment-orders routes
app.use('/sphipment-orders', sphipmentOrdersRouter);

// people location
app.use('/location', locationRouter);

// natural hoses
app.use('/natural-hose', naturalHoseRouter);

// sexs
app.use('/sex', sexRouter);

app.use('/send', sendRouter);

export default app;
