import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import{SwaggerModule,DocumentBuilder} from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform:true
    }),
  );
  app.enableShutdownHooks();
  const config=new DocumentBuilder()
  .setTitle('API documentation')
  .setVersion('1.0')
  .setDescription('documentation for my Oauthe api end points')
  .build()
  

const document=SwaggerModule.createDocument(app,config)
SwaggerModule.setup('docs',app,document)
  const port = 3333
  await app.listen(port);
  console.log('app is listeSin on port' + port);
}
bootstrap();
