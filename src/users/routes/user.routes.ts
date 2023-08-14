import { Router, type Request, type Response } from 'express';

import { createUser } from '../controllers';
import type { UserCreateInput } from '../types';

const router = Router();

// create new user
router.post('/', async (req: Request, res: Response) => {
  const newUserData = req.body as UserCreateInput[];

  const newUserCreated = await createUser(newUserData);
  res.json({ usersCreated: newUserCreated });
});

export default router;
