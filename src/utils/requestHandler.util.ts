import { Request, Response, NextFunction } from 'express';

type Handler = (req: Request, res: Response, next: NextFunction) => Promise<Response | void>;

export const requestHandler = (handler: Handler) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    await handler(req, res, next);
  } catch (err) {
    next(err);
  }
};
