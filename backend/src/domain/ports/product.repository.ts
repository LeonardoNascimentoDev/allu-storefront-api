import { Product } from "../models/product.model";

export interface ProductRepository {
  findAll(): Promise<Product[]>;
  findById(id: number): Promise<Product | null>;
  findByCategory(category: string): Promise<Product[]>;
  findByPartialCategoryAndName(
    category: string,
    name: string,
  ): Promise<Product[]>;
}
