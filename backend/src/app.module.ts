import { Module, MiddlewareConsumer, RequestMethod } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductController } from "./adapters/controllers/product.controller";
import { ProductService } from "./application/services/product.service";
import { ProductRepositoryMySQL } from "./adapters/persistence/typeorm/product.repository.mysql";
import { ProductEntity } from "./adapters/persistence/typeorm/product.entity";
import { typeOrmConfig } from "./infrastructure/config/typeorm.config";

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    TypeOrmModule.forFeature([ProductEntity]),
  ],
  controllers: [ProductController],
  providers: [
    ProductService,
    { provide: "ProductRepository", useClass: ProductRepositoryMySQL },
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "http://localhost:3000");
        res.header(
          "Access-Control-Allow-Headers",
          "Origin, X-Requested-With, Content-Type, Accept",
        );
        res.header(
          "Access-Control-Allow-Methods",
          "GET, POST, PUT, DELETE, OPTIONS",
        );
        next();
      })
      .forRoutes({ path: "*", method: RequestMethod.ALL });
  }
}
