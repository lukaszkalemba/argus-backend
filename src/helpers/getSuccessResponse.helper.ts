import { IToast } from '~types/toast.types';

interface ISuccessData {
  result: unknown;
  toast?: IToast;
}

export const getSuccessResponse = ({ result, toast }: ISuccessData) => ({
  data: result,
  toast,
});
