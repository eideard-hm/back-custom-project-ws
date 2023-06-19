import { type Request, type Response, Router } from 'express';

import { prisma } from '../../prisma';
import { createUser } from '../controllers';
import type { User } from '../types';

const router = Router();

// get all users
router.get('/', async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  res.json({ users });
});

// create new user
router.post('/', async (req: Request, res: Response) => {
  const newUserData = req.body as User;

  const newUserCreated = await createUser(newUserData);
  res.json({ newUserCreated });
});

export default router;
