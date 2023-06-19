import express from 'express';
import cors from 'cors';

import authRouter from './auth/routes/auth.routes';
import userRouter from './users/routes/user.routes'

const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.get('/', (req, res) => {
  return res.json({ message: 'Hello World' });
});

// auth routes
app.use('/auth', authRouter);

// user routes
app.use('/user', userRouter)

export default app;
