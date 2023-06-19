import { PrismaClient } from '@prisma/client';
import { type Request, type Response, Router } from 'express';

import { ILoginData } from '../models';

const router = Router();
const prisma = new PrismaClient();

// get all users
router.get('/users', async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  res.json({ users });
});

router.post('/login', (req: Request, res: Response) => {
  const { email, password } = req.body as ILoginData;

  console.log({ email, password });
  res.json({ login: true });
});

export default router;
