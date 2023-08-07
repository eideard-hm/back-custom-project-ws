import type { Request, Response } from 'express';

import { serializedBigint } from '../../../utils';
import { retrieveLocationsService } from '../../services';

export const retrieveLocations = async (req: Request, res: Response) => {
  try {
    const userId = Number(req.params['userId'] ?? 0);
    const serviceCode = req.params['serviceCode'];

    const services = await retrieveLocationsService(userId, serviceCode);
    const serialized = serializedBigint(services);
    res.send(serialized);
  } catch (error) {
    console.error(error);
    res.send([]);
  }
};
