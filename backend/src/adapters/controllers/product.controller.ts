import {
  Controller,
  Get,
  Query,
  Param,
  NotFoundException,
  InternalServerErrorException,
} from "@nestjs/common";
import { ProductService } from "../../application/services/product.service";
import { Product } from "../../domain/models/product.model";
import { ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { WinstonLoggerService } from "src/logging/winston-logger.service";

@ApiTags("allu-storefront")
@Controller("products")
export class ProductController {
  constructor(
    private readonly productService: ProductService,
    private readonly logger: WinstonLoggerService,
  ) {}

  @Get()
  @ApiOperation({ summary: "Obter todos os produtos" })
  @ApiOkResponse({ description: "Lista de retorno de todos os produtos" })
  async getAllProducts(): Promise<Product[]> {
    try {
      this.logger.log("Retrieving all products");
      return await this.productService.findAll();
    } catch (error) {
      this.logger.error(`Error retrieving all products: ${error.message}`);
      throw new InternalServerErrorException("Failed to retrieve products");
    }
  }

  @Get(":id")
  @ApiOperation({ summary: "Obter produto por id" })
  @ApiOkResponse({ description: "Sucesso na procura de produto" })
  async getProductById(@Param("id") id: number): Promise<Product | null> {
    try {
      this.logger.log(`Retrieving product with id: ${id}`);
      const product = await this.productService.findById(id);
      if (!product) {
        throw new NotFoundException(`Product with id ${id} not found`);
      }
      return product;
    } catch (error) {
      this.logger.error(
        `Error retrieving product with id ${id}: ${error.message}`,
      );
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException(
        `Failed to retrieve product with id ${id}`,
      );
    }
  }

  @Get("/search/category")
  @ApiOperation({ summary: "Obter produto por nome do produto ou categoria" })
  @ApiOkResponse({ description: "Sucesso na procura de produto" })
  async getProductsByPartialCategoryAndName(
    @Query("category") partialCategory: string,
    @Query("name") partialName: string,
  ): Promise<Product[]> {
    try {
      this.logger.log(
        `Searching for products with category: ${partialCategory} and name: ${partialName}`,
      );
      if (partialCategory || partialName) {
        return await this.productService.findByPartialCategoryAndName(
          partialCategory,
          partialName,
        );
      }
      return [];
    } catch (error) {
      this.logger.error(`Error searching products: ${error.message}`);
      throw new InternalServerErrorException("Failed to search products");
    }
  }
}
