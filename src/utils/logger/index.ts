import { isProduction } from '~config/config';
import ProductionLoggers from './ProductionLoggers';
import DevelopmentLoggers from './DevelopmentLoggers';

// Logger for the developer usage
export const logger = isProduction ? ProductionLoggers.getDeveloperLogger() : DevelopmentLoggers.getDeveloperLogger();

// Logger handler for requests used as middleware
export const requestLogger = isProduction ? ProductionLoggers.getRequstLogger() : DevelopmentLoggers.getRequstLogger();

// Logger handler for errors used as middleware
export const errorLogger = isProduction ? ProductionLoggers.getErrorLogger() : DevelopmentLoggers.getErrorLogger();
