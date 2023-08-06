import type { Request, Response } from 'express';

import { serializedBigint } from '../../../utils';
import { retrieveSexService } from '../../services';

export const retrieveSexs = async (_: Request, res: Response) => {
  try {
    const sexs = await retrieveSexService();
    res.send(serializedBigint(sexs));
  } catch (error) {
    console.error(error);
    res.send([]);
  }
};
