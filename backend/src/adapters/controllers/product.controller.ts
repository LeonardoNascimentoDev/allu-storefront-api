import { Controller, Get, Param } from '@nestjs/common';
import { ProductService } from '../../application/services/product.service';
import { Product } from '../../domain/models/product.model';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getAllProducts(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Get(':id')
  async getProductById(@Param('id') id: number): Promise<Product | null> {
    return this.productService.findById(id);
  }

  @Get('category/:category')
  async getProductsByCategory(
    @Param('category') category: string,
  ): Promise<Product[]> {
    return this.productService.findByCategory(category);
  }
}
