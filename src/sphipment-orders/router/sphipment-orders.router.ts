import { Router, type Request, type Response } from 'express';

import { createMultiplesShipmentOrders, createShipmentOrders, getAllShipmentOrdersAsync } from '../controllers';
import type { ShipmentOrdersCreateInput } from '../types';

const router = Router();

router.post('/', async (req: Request, res: Response) => {
  const body = req.body as ShipmentOrdersCreateInput;
  const responseService = await createShipmentOrders(body);
  res.send(responseService);
});

router.post('/multiples', async (req: Request, res: Response) => {
  const body = req.body as ShipmentOrdersCreateInput[];
  const responseService = await createMultiplesShipmentOrders(body);
  res.send(responseService);
});

router.get('/:userId', async (req: Request, res: Response) => {
  const userId = req.params['userId'];
  const shipments = await getAllShipmentOrdersAsync(Number(userId));
  res.send(shipments);
});

export default router;
