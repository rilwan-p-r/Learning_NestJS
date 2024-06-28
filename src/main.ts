import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger } from './middleware/logger.middleware';

async function server() {
  const app = await NestFactory.create(AppModule);
  // app.use(logger)     //global middleware for every route checking
  await app.listen(3000);
}
server();
