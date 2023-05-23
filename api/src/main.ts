import {
  ClassSerializerInterceptor,
  ValidationPipe,
  VersioningType,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory, Reflector } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { useContainer } from 'class-validator';
import * as requestIp from 'request-ip';
import { Logger, LoggerErrorInterceptor } from 'nestjs-pino';

// import helmet from 'helmet';
import { AppModule } from './app.module';
import validationOptions from './utils/validation-options';
import { AllConfigType } from './config/config.type';
import rawBodyMiddleware from './stripe/middleware/raw-body.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
    bufferLogs: true,
  });
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

  app.use(requestIp.mw());
  app.useLogger(app.get(Logger));

  //   Helmet Middleware against known security vulnerabilities
  //   app.use(
  //     helmet({
  //       contentSecurityPolicy: {
  //         directives: {
  //           defaultSrc: [`'self'`],
  //           styleSrc: [
  //             `'self'`,
  //             `'unsafe-inline'`,
  //             'cdn.jsdelivr.net',
  //             'fonts.googleapis.com',
  //             'img.icons8.com',
  //           ],
  //           fontSrc: [`'self'`, 'fonts.gstatic.com'],
  //           imgSrc: [`'self'`, 'data:', 'cdn.jsdelivr.net', 'img.icons8.com'],
  //           scriptSrc: [
  //             `'self'`,
  //             `https: 'unsafe-inline'`,
  //             `cdn.jsdelivr.net`,
  //             'img.icons8.com',
  //           ],
  //         },
  //       },
  //     }),
  //   );

  app.useGlobalPipes(new ValidationPipe(validationOptions));
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  app.useGlobalInterceptors(new LoggerErrorInterceptor());

  const options = new DocumentBuilder()
    .setTitle('VOW API')
    .setDescription('VOW API docs')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);

  await app.listen(configService.getOrThrow('app.port', { infer: true }));
}
void bootstrap();
