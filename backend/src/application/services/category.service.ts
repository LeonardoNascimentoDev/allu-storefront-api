import { Injectable, Inject } from "@nestjs/common";
import { CategoryRepository } from "src/domain/ports/category.repository";
import { Category } from "src/domain/models/category.model";

@Injectable()
export class CategoryService {
  constructor(
    @Inject("CategoryRepository")
    private readonly categoryRepository: CategoryRepository,
  ) {}

  async findAllCategories(): Promise<Category[]> {
    return this.categoryRepository.findAllCategories();
  }
}
