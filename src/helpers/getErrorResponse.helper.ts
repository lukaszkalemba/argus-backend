import Joi from 'joi';
import { StatusCodes } from 'http-status-codes';
import { IToast } from '~types/toast.types';

interface IErrorData {
  message: string;
  statusCode: StatusCodes;
  toast?: IToast;
  details?: Joi.ValidationErrorItem[];
}

export const getErrorResponse = ({ message, statusCode, details, toast }: IErrorData) => ({
  error: {
    message,
    statusCode,
    details,
  },
  toast,
});
