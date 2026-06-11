import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { AuthGuard } from './Guards';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform:true
    }),
  );
  app.enableShutdownHooks();
  app.useGlobalGuards(new AuthGuard())
  const port = 3333;
  await app.listen(port);
  console.log('app is listenin on port' + port);
}
bootstrap();
