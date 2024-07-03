import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { ProductEntity } from "../../adapters/persistence/typeorm/product.entity";
import { CategoryEntity } from "src/adapters/persistence/typeorm/category.entity";

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: "mysql",
  host: process.env.DB_HOST,
  port: 3306,
  username: "root",
  password: "root",
  database: "products_db",
  entities: [ProductEntity, CategoryEntity],
  synchronize: true,
};
