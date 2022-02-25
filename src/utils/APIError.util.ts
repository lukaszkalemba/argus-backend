import { getReasonPhrase, StatusCodes } from 'http-status-codes';
import { IToast } from '~types/toast.types';

interface IAPIError {
  statusCode: StatusCodes;
  toast?: IToast;
  message?: string;
}

export class APIError extends Error {
  statusCode: StatusCodes;
  toast?: IToast;
  customMessage?: string;

  constructor({ statusCode, toast, message: customMessage }: IAPIError) {
    const targetMessage = customMessage || getReasonPhrase(statusCode);

    super(targetMessage);
    Error.captureStackTrace(this, this.constructor);

    this.statusCode = statusCode;
    this.toast = toast;
    this.message = targetMessage;

    Object.setPrototypeOf(this, APIError.prototype);
  }
}
