import { Router } from 'express';
import { missingRouteHandler } from '~middleware/missingRoute.middleware';
import vehicles from '~routes/vehicles.routes';

const router = Router();

const v0 = Router();

v0.use('/vehicles', vehicles);

router.use('/api/v0', v0);

router.use(missingRouteHandler);

export default router;
