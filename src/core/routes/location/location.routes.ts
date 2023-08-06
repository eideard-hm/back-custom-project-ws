import { Router } from 'express';

import { retrieveLocations } from '../../controllers';

const router = Router();

router.get('/:userId', retrieveLocations);

export default router;
