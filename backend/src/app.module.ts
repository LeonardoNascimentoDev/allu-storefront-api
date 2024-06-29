import { Module } from "@nestjs/common";
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
export class AppModule {}
