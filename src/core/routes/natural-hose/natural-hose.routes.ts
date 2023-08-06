import { Router } from 'express';

import { retrieveNaturalHose } from '../../controllers';

const router = Router();

router.get('/:serviceId', retrieveNaturalHose);

export default router;
