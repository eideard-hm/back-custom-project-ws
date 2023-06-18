import { type Request, type Response, Router } from 'express';

import { ILoginData } from '../models';

const router = Router();

router.post('/login', (req: Request, res: Response) => {
  const { email, password  } = req.body as ILoginData;

  console.log({email, password});
  res.json({ login: true });
});

export default router;
