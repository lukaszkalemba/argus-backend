import convict from 'convict';
import dotenv from 'dotenv';

dotenv.config();

const config = convict({
  // General
  general: {
    ENV: {
      format: ['production', 'development'],
      default: 'development',
      env: 'NODE_ENV',
    },
    PORT: {
      format: 'port',
      default: 5000,
      env: 'PORT',
    },
  },

  // Database
  database: {
    DATABASE_URI: {
      format: String,
      default: 'localhost',
      env: 'DATABASE_URI',
    },
  },

  // Logging
  logging: {
    LEVEL: {
      format: ['error', 'warn', 'info', 'http', 'verbose', 'debug', 'sill'],
      default: 'http',
      env: 'LOGGING_LEVEL',
    },
    IS_HUMAN_READABLE: {
      format: Boolean,
      default: true,
      env: 'IS_LOGGING_HUMAN_READABLE',
    },
  },
});

config.validate({ allowed: 'strict' });

export const isProduction = config.get('general.ENV') === 'production';

export default config;
