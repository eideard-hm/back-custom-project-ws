import { Router, type Request, type Response } from 'express';

import { createUser, getAllUsers } from '../controllers';
import type { User } from '../types';

const router = Router();

// get all users
router.get('/', async (req: Request, res: Response) => {
  const users = await getAllUsers();
  res.json({ users });
});

// create new user
router.post('/', async (req: Request, res: Response) => {
  const newUserData = req.body as User[];

  const newUserCreated = await createUser(newUserData);
  res.json({ usersCreated: newUserCreated });
});

export default router;
