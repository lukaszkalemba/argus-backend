import Joi from 'joi';

export const updateSchema = Joi.object({
  name: Joi.string(),
  type: Joi.string().valid('SUV', 'Truck', 'Hybrid'),
});

export const createSchema = updateSchema.keys({
  name: Joi.required(),
  type: Joi.required(),
});
