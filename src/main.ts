import { NestFactory } from '@nestjs/core';
import * as dotenv from 'dotenv';
import { AppModule } from './app.module';

dotenv.config();

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  app.enableCors().setGlobalPrefix('v1/api');

  await app.listen(3000);
}

// tslint:disable-next-line: no-floating-promises
bootstrap();
