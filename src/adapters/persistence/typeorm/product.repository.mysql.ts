import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductRepository } from '../../../domain/ports/product.repository';
import { Product } from '../../../domain/models/product.model';
import { ProductEntity } from './product.entity';

@Injectable()
export class ProductRepositoryMySQL implements ProductRepository {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly repository: Repository<ProductEntity>,
  ) {}

  async findAll(): Promise<Product[]> {
    const products = await this.repository.find();
    return products.map(
      (product) =>
        new Product(
          product.id,
          product.name,
          product.technicalDetails,
          product.annualValue,
          product.photos,
        ),
    );
  }

  async findById(id: number): Promise<Product | null> {
    const product = await this.repository.findOne({ where: { id } });
    if (!product) return null;
    return new Product(
      product.id,
      product.name,
      product.technicalDetails,
      product.annualValue,
      product.photos,
    );
  }
}
