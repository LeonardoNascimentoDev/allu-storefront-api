import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { ProductEntity } from "../../adapters/persistence/typeorm/product.entity";

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: "mysql",
  host: "db",
  port: 3306,
  username: "root",
  password: "root",
  database: "products_db",
  entities: [ProductEntity],
  synchronize: true,
};
