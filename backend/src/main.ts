// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const configService = app.get(ConfigService);

  // Serve static files from the 'uploads' directory
  app.useStaticAssets(join(__dirname, '..', 'uploads'), {
    prefix: '/uploads/',
  });

  // Get allowed origins from environment or use default
  const allowedOrigins = process.env.ALLOWED_ORIGINS 
    ? process.env.ALLOWED_ORIGINS.split(',')
    : [process.env.FRONTEND_URL || 'http://localhost:5173', 'https://car-booking-test.vercel.app'];

  // Enable CORS with specific configuration
  app.enableCors({
    origin: allowedOrigins,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
    allowedHeaders: ['Content-Type', 'Accept', 'Authorization'],
    preflightContinue: false,
    optionsSuccessStatus: 204
  });

  // Global prefix for API routes
  app.setGlobalPrefix('api');

  // Use global validation pipe
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true
  }));

  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
