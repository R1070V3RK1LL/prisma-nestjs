"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const prisma_module_1 = require("./prisma/prisma.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(prisma_module_1.PrismaModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Prisma Day - NestJS Prisma Workshop')
        .setDescription('Building a REST API with NestJS and Prisma')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document, { customSiteTitle: 'Prisma Day' });
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map