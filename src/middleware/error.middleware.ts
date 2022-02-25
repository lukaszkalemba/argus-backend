import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import { StatusCodes } from 'http-status-codes';
import { APIError } from '~utils/APIError.util';
import { getErrorResponse } from '~helpers/getErrorResponse.helper';

export const errorHandler = (
  error: APIError | Joi.ValidationError | Error,
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof APIError) {
    const { statusCode, toast, message } = error;

    return res.status(statusCode).json(getErrorResponse({ message, toast, statusCode }));
  }

  if (error instanceof Joi.ValidationError) {
    const statusCode = StatusCodes.BAD_REQUEST;
    const { message } = error;

    return res.status(statusCode).json(getErrorResponse({ message, statusCode }));
  }

  if (error instanceof Error) {
    const { message } = error;
    const statusCode = StatusCodes.INTERNAL_SERVER_ERROR;

    return res.status(statusCode).json(getErrorResponse({ message, statusCode }));
  }

  return next(error);
};
