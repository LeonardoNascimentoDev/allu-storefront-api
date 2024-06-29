import { Controller, Get, Query } from "@nestjs/common";
import { ProductService } from "../../application/services/product.service";
import { Product } from "../../domain/models/product.model";

@Controller("products")
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getAllProducts(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Get(":id")
  async getProductById(@Query("id") id: number): Promise<Product | null> {
    return this.productService.findById(id);
  }

  @Get("/search/category")
  async getProductsByPartialCategoryAndName(
    @Query("category") partialCategory: string,
    @Query("name") partialName: string,
  ): Promise<Product[]> {
    if (partialCategory || partialName) {
      return this.productService.findByPartialCategoryAndName(
        partialCategory,
        partialName,
      );
    }
  }
}
