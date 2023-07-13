import { Router, type Request, type Response } from 'express';

import { createShipmentOrders } from '../controllers';
import type { ShipmentOrdersCreateInput } from '../types';

const router = Router();

router.post('/', async (req: Request, res: Response) => {
  const body = req.body as ShipmentOrdersCreateInput;
  const responseService = await createShipmentOrders(body);
  res.send(responseService);
});

export default router;
