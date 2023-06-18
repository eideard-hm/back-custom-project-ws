import express from 'express';
import cors from 'cors';

import authRouter from './auth/routes/auth.routes';

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

export default app;
