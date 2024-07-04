import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { ProductEntity } from "../../adapters/persistence/typeorm/product.entity";
import { CategoryEntity } from "src/adapters/persistence/typeorm/category.entity";

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: parseInt(process.env.DB_PORT, 10) || 5432,
  username: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "root",
  database: process.env.DB_NAME || "products_db",
  entities: [ProductEntity, CategoryEntity],
  synchronize: true,
  retryAttempts: 20,
  retryDelay: 5000,
};
