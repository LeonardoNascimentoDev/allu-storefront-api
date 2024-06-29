import { Product } from "../models/product.model";

export interface ProductRepository {
  findAll(): Promise<Product[]>;
  findById(id: number): Promise<Product | null>;
  findByPartialCategory(partialCategory: string): Promise<Product[]>;
}
