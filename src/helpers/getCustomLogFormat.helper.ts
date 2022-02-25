import { TransformableInfo } from 'logform';

export const getCustomLogFormat = ({ time, level, message }: TransformableInfo) => `${time} [${level}] ${message}`;
