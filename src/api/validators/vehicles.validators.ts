import Joi from 'joi';

export const updateSchema = Joi.object({
  name: Joi.string(),
  type: Joi.string().valid('SUV', 'Truck', 'Hybrid'),
  lat: Joi.number(),
  lng: Joi.number(),
});

export const createSchema = updateSchema.keys({
  name: Joi.required(),
  type: Joi.required(),
  lat: Joi.required(),
  lng: Joi.required(),
});
