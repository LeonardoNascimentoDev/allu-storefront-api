import { Controller, Get, Param, Query } from "@nestjs/common";
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
  async getProductById(@Param("id") id: number): Promise<Product | null> {
    return this.productService.findById(id);
  }

  @Get("search/category")
  async getProductsByPartialCategory(
    @Query("category") partialCategory: string,
  ): Promise<Product[]> {
    if (partialCategory) {
      return this.productService.findByPartialCategory(partialCategory);
    } else {
      return this.productService.findAll();
    }
  }
}
