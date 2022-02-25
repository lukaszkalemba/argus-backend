import mongoose from 'mongoose';
import config from '~config/config';
import { logger } from '~utils/logger';

export const connectDB = async (): Promise<void> => {
  try {
    const conn = await mongoose.connect(config.get('database.DATABASE_URI'));

    logger.info(`MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    if (err instanceof Error) {
      logger.error(err.message);
      throw new Error(err.message);
    }

    logger.error('MongoDB connection cannot be established');
    process.exit(1);
  }
};
