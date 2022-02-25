import { Router } from 'express';
import { requestHandler } from '~utils/requestHandler.util';
import { validate } from '~middleware/validation.middleware';
import { createVehicle, deleteVehicle, getVehicle, getVehicles, updateVehicle } from '~controllers/vehicles.controller';
import { createSchema, updateSchema } from '~validators/vehicles.validators';

const router = Router();

router.get('/', requestHandler(getVehicles));
router.get('/:id', requestHandler(getVehicle));
router.post('/', validate('body', createSchema), requestHandler(createVehicle));
router.patch('/:id', validate('body', updateSchema), requestHandler(updateVehicle));
router.delete('/:id', requestHandler(deleteVehicle));

export default router;
