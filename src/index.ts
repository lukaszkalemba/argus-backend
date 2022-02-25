import express from 'express';
import cors from 'cors';
import config from '~config/config';
import { connectDB } from '~db/connectDB';
import router from '~router/router';
import { logger, errorLogger, requestLogger } from '~utils/logger';
import { errorHandler } from '~middleware/error.middleware';

const main = async () => {
  await connectDB();

  const app = express();

  app.use(cors());
  app.use(express.json());

  app.use(requestLogger);

  app.use(router);

  app.use(errorLogger);
  app.use(errorHandler);

  const PORT = config.get('general.PORT');

  app.listen(PORT, () => logger.info(`Server is listening on port ${PORT}`));
};

main().catch((err) => console.error(err));
