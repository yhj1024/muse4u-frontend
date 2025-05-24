import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // CORS 활성화
  await app.listen(process.env.PORT ?? 3002);
  console.log(`Backend is running on: http://localhost:3002`);
}
bootstrap();
