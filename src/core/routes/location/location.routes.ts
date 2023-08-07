import { Router } from 'express';

import { retrieveLocations } from '../../controllers';

const router = Router();

router.get('/:userId/:serviceCode', retrieveLocations);

export default router;
