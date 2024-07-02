import { Category } from "../models/category.model";

export interface CategoryRepository {
  findAllCategories(): Promise<Category[]>;
}
