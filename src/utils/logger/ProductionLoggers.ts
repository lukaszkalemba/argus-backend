import { errorLogger, logger as requestLogger } from 'express-winston';
import { createLogger, format, transports } from 'winston';
import config from '~config/config';

const { combine, timestamp, json } = format;

class ProductionLoggers {
  private level: string;
  private spacing: number;

  constructor() {
    this.level = config.get('logging.LEVEL');
    this.spacing = config.get('logging.IS_HUMAN_READABLE') ? 2 : 0;
  }

  getDeveloperLogger() {
    return createLogger({
      level: this.level,
      transports: [new transports.Console()],
      format: combine(timestamp(), json({ space: this.spacing })),
    });
  }

  getRequstLogger() {
    return requestLogger({
      level: 'http',
      transports: [new transports.Console({ level: 'http' })],
      format: format.combine(timestamp(), json({ space: this.spacing })),
      meta: true,
      msg: '{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}',
    });
  }

  getErrorLogger() {
    return errorLogger({
      level: 'error',
      transports: [new transports.Console()],
      format: format.combine(json({ space: this.spacing })),
    });
  }
}

export default new ProductionLoggers();
