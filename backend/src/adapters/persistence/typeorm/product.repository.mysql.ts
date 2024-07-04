import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ProductRepository } from "../../../domain/ports/product.repository";
import { Product } from "../../../domain/models/product.model";
import { ProductEntity } from "./product.entity";
import { WinstonLoggerService } from "src/logging/winston-logger.service";

@Injectable()
export class ProductRepositoryMySQL implements ProductRepository {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly repository: Repository<ProductEntity>,
    private readonly logger: WinstonLoggerService,
  ) {}

  async findAll(): Promise<Product[]> {
    try {
      const products = await this.repository.find();
      return products.map(
        (product) =>
          new Product(
            product.id,
            product.name,
            product.category,
            product.technical_details,
            product.annual_value,
            product.photos,
          ),
      );
    } catch (error) {
      this.logger.error(`Error finding all products: ${error.message}`);
      throw new InternalServerErrorException("Failed to find products");
    }
  }

  async findById(id: number): Promise<Product | null> {
    try {
      const product = await this.repository.findOne({ where: { id } });
      if (!product) return null;
      return new Product(
        product.id,
        product.name,
        product.category,
        product.technical_details,
        product.annual_value,
        product.photos,
      );
    } catch (error) {
      this.logger.error(`Error finding product by id ${id}: ${error.message}`);
      throw new InternalServerErrorException(
        `Failed to find product with id ${id}`,
      );
    }
  }

  async findByPartialCategoryAndName(
    partialCategory: string,
    partialName: string,
  ): Promise<Product[]> {
    try {
      let queryBuilder = this.repository.createQueryBuilder("product");

      if (partialCategory) {
        queryBuilder = queryBuilder.where(
          "LOWER(product.category) LIKE LOWER(:partialCategory)",
          {
            partialCategory: `%${partialCategory}%`,
          },
        );
      }

      if (partialName) {
        queryBuilder = queryBuilder.andWhere(
          "LOWER(product.name) LIKE LOWER(:partialName)",
          {
            partialName: `%${partialName}%`,
          },
        );
      }

      const products = await queryBuilder.getMany();
      return products.map(this.mapEntityToModel);
    } catch (error) {
      this.logger.error(`Error searching products: ${error.message}`);
      throw new InternalServerErrorException("Failed to search products");
    }
  }

  private mapEntityToModel(entity: ProductEntity): Product {
    return new Product(
      entity.id,
      entity.name,
      entity.category,
      entity.technical_details,
      entity.annual_value,
      entity.photos,
    );
  }
}
