import { Router } from 'express';

import { saveHistoricalSent } from '../../controllers';

const sendRouter = Router();

sendRouter.post('/', saveHistoricalSent);

export { sendRouter };
