import type { Request, Response } from 'express';

import { serializedBigint } from '../../../utils';
import { retrieveNaturalHoseService } from '../../services';

export const retrieveNaturalHose = async (req: Request, res: Response) => {
  try {
    const serviceId = Number(req.params['serviceId'] ?? '');
    const naturalHose = await retrieveNaturalHoseService(serviceId);
    res.send(serializedBigint(naturalHose));
  } catch (error) {
    console.error(error);
    res.send([]);
  }
};
