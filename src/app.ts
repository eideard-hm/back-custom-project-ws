import cors from 'cors';
import express from 'express';

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

// send messages
app.use('/send', sendRouter);

export default app;
