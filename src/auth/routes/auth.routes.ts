import { Router, type Request, type Response } from 'express';

import { loginUser } from '../controllers';
import type { ILoginData } from '../types';

const router = Router();

router.post('/login', async (req: Request, res: Response) => {
  const credentails = req.body as ILoginData;

  const userExists = await loginUser(credentails);

  res.json({ login: userExists });
});

export default router;
