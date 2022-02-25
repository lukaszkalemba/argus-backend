import { Request } from 'express';
import { APIError } from '~utils/APIError.util';

export const missingRouteHandler = (req: Request) => {
  throw new APIError({ statusCode: 400, message: `Route ${req.url} is invalid` });
};
