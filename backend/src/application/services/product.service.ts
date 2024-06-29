import { Injectable, Inject } from "@nestjs/common";
import { ProductRepository } from "../../domain/ports/product.repository";
import { Product } from "../../domain/models/product.model";

@Injectable()
export class ProductService {
  constructor(
    @Inject("ProductRepository")
    private readonly productRepository: ProductRepository,
  ) {}

  async findAll(): Promise<Product[]> {
    return this.productRepository.findAll();
  }

  async findById(id: number): Promise<Product | null> {
    return this.productRepository.findById(id);
  }

  async findByPartialCategoryAndName(
    category: string,
    name: string,
  ): Promise<Product[]> {
    return this.productRepository.findByPartialCategoryAndName(category, name);
  }
}
