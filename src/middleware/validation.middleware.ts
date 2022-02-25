import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

export const validate =
  (type: 'headers' | 'params' | 'query' | 'body', schema: Joi.ObjectSchema) =>
  async (req: Request, _res: Response, next: NextFunction) => {
    const { error } = schema.validate(req[type]);

    if (error) {
      return next(error);
    }

    return next();
  };
