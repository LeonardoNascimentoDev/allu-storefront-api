import { Controller, Get, Query } from "@nestjs/common";
import { ProductService } from "../../application/services/product.service";
import { Product } from "../../domain/models/product.model";
import { ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
@ApiTags("allu-storefront")
@Controller("products")
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  @ApiOperation({ summary: "Obter todos os produtos" })
  @ApiOkResponse({ description: "Lista de retorno de todos os produtos" })
  async getAllProducts(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Obter produto por id" })
  @ApiOkResponse({ description: "Sucesso na procura de produto" })
  async getProductById(@Query("id") id: number): Promise<Product | null> {
    return this.productService.findById(id);
  }

  @Get("/search/category")
  @ApiOperation({ summary: "Obter produto por nome do produto ou categoria" })
  @ApiOkResponse({ description: "Sucesso na procura de produto" })
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
