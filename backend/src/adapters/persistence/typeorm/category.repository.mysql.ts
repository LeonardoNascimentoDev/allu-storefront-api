import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { WinstonLoggerService } from "src/logging/winston-logger.service";
import { CategoryRepository } from "src/domain/ports/category.repository";
import { Category } from "src/domain/models/category.model";
import { CategoryEntity } from "./category.entity";

@Injectable()
export class CategoryRepositoryMySQL implements CategoryRepository {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly repository: Repository<CategoryEntity>,
    private readonly logger: WinstonLoggerService,
  ) {}

  async findAllCategories(): Promise<Category[]> {
    try {
      const categories = await this.repository.find();
      return categories.map(
        (category) =>
          new Category(category.id, category.category, category.photo),
      );
    } catch (error) {
      this.logger.error(`Error finding all categories: ${error.message}`);
      throw new InternalServerErrorException("Failed to find categories");
    }
  }
}
