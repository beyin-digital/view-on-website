import {
  ClassSerializerInterceptor,
  Logger,
  ValidationPipe,
  VersioningType,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory, Reflector } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { useContainer } from 'class-validator';
import { AppModule } from './app.module';
import validationOptions from './utils/validation-options';
import { AllConfigType } from './config/config.type';
import rawBodyMiddleware from './stripe/middleware/raw-body.middleware';
import * as requestIp from 'request-ip';

import helmet from 'helmet';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: {
      origin: [
        'http://localhost:3000',
        'https://viewonwebsite.com',
        'https://www.viewonwebsite.com',
      ],
    },

    bufferLogs: true,
  });

  app.use(
    helmet({
      contentSecurityPolicy: {
        directives: {
          defaultSrc: [`'self'`],
          styleSrc: [
            `'self'`,
            `'unsafe-inline'`,
            'cdn.jsdelivr.net',
            'fonts.googleapis.com',
            'img.icons8.com',
          ],
          fontSrc: [`'self'`, 'fonts.gstatic.com'],
          imgSrc: [
            `'self'`,
            'data:',
            'cdn.jsdelivr.net',
            'img.icons8.com',
            'res.cloudinary.com',
          ],
          scriptSrc: [
            `'self'`,
            `https: 'unsafe-inline'`,
            `cdn.jsdelivr.net`,
            'img.icons8.com',
          ],
        },
      },
    }),
  );

  app.use(requestIp.mw());

  useContainer(app.select(AppModule), { fallbackOnErrors: true });
  const configService = app.get(ConfigService<AllConfigType>);

  app.enableShutdownHooks();
  app.setGlobalPrefix(
    configService.getOrThrow('app.apiPrefix', { infer: true }),
    {
      exclude: ['/'],
    },
  );
  app.enableVersioning({
    type: VersioningType.URI,
  });
  app.use(rawBodyMiddleware());
  app.useLogger(app.get(Logger));

  app.useGlobalPipes(new ValidationPipe(validationOptions));
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));

  const options = new DocumentBuilder()
    .setTitle('API')
    .setDescription('API docs')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);

  await app.listen(configService.getOrThrow('app.port', { infer: true }));
}
void bootstrap();
