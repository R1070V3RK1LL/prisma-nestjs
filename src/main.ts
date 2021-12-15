import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { PrismaModule } from './prisma/prisma.module';

async function bootstrap() {
    const app = await NestFactory.create(PrismaModule);

    const config = new DocumentBuilder()
        .setTitle('Prisma Day - NestJS Prisma Workshop')
        .setDescription('Building a REST API with NestJS and Prisma')
        .setVersion('1.0')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document, { customSiteTitle: 'Prisma Day' });

    await app.listen(3000);
}
bootstrap();