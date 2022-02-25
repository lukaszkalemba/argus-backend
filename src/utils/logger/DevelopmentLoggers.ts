import { errorLogger, logger as requestLogger } from 'express-winston';
import { createLogger, format, transports } from 'winston';
import config from '~config/config';
import { getCustomLogFormat } from '~helpers/getCustomLogFormat.helper';

const { combine, colorize, timestamp, printf } = format;

class DevelopmentLoggers {
  private level: string;
  private timeFormat: string;

  constructor() {
    this.level = config.get('logging.LEVEL');
    this.timeFormat = 'HH:mm:ss';
  }

  getDeveloperLogger() {
    return createLogger({
      level: this.level,
      transports: [new transports.Console()],
      format: combine(
        colorize(),
        timestamp({ format: this.timeFormat }),
        printf(({ timestamp: time, level, message }) => getCustomLogFormat({ time, level, message }))
      ),
    });
  }

  getRequstLogger() {
    return requestLogger({
      level: 'http',
      transports: [new transports.Console({ level: 'http' })],
      format: combine(
        colorize(),
        timestamp({ format: this.timeFormat }),
        printf(({ timestamp: time, level, message }) => getCustomLogFormat({ time, level, message }))
      ),
      msg: 'HTTP {{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}',
    });
  }

  getErrorLogger() {
    return errorLogger({
      level: 'error',
      transports: [new transports.Console()],
      format: combine(
        colorize(),
        timestamp({ format: this.timeFormat }),
        printf(({ timestamp: time, level, meta }) => getCustomLogFormat({ time, level, message: meta.message }))
      ),
    });
  }
}

export default new DevelopmentLoggers();
