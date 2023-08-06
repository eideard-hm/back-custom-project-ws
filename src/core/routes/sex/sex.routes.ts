import { Router } from 'express';

import { retrieveSexs } from '../../controllers';

const sexRouter = Router();

sexRouter.get('/', retrieveSexs)

export { sexRouter };
