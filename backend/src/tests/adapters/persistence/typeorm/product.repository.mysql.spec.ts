import { Test, TestingModule } from "@nestjs/testing";
import { getRepositoryToken } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Product } from "src/domain/models/product.model";
import { ProductRepositoryMySQL } from "src/adapters/persistence/typeorm/product.repository.mysql";
import { ProductEntity } from "src/adapters/persistence/typeorm/product.entity";

describe("ProductRepositoryMySQL", () => {
  let repository: Repository<ProductEntity>;
  let productRepository: ProductRepositoryMySQL;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductRepositoryMySQL,
        {
          provide: getRepositoryToken(ProductEntity),
          useClass: Repository,
        },
      ],
    }).compile();

    productRepository = module.get<ProductRepositoryMySQL>(
      ProductRepositoryMySQL,
    );
    repository = module.get<Repository<ProductEntity>>(
      getRepositoryToken(ProductEntity),
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should be defined", () => {
    expect(productRepository).toBeDefined();
  });

  describe("findAll", () => {
    it("should return an array of products", async () => {
      const mockProducts: ProductEntity[] = [
        {
          id: 1,
          name: "Product 1",
          category: "Category 1",
          technicalDetails: "Details",
          annualValue: "100.00",
          photos: "photo1.jpg",
        },
        {
          id: 2,
          name: "Product 2",
          category: "Category 2",
          technicalDetails: "Details",
          annualValue: "200.00",
          photos: "photo2.jpg",
        },
      ];
      jest.spyOn(repository, "find").mockResolvedValue(mockProducts);

      const result = await productRepository.findAll();

      expect(result).toHaveLength(2);
      expect(result[0]).toBeInstanceOf(Product);
      expect(result[1].name).toEqual("Product 2");
    });
  });

  describe("findById", () => {
    it("should return a product by ID", async () => {
      const mockProduct: ProductEntity = {
        id: 1,
        name: "Product 1",
        category: "Category 1",
        technicalDetails: "Details",
        annualValue: "100.00",
        photos: "photo1.jpg",
      };
      jest.spyOn(repository, "findOne").mockResolvedValue(mockProduct);

      const result = await productRepository.findById(1);

      expect(result).toBeInstanceOf(Product);
      expect(result?.name).toEqual("Product 1");
    });

    it("should return null when product is not found by ID", async () => {
      jest.spyOn(repository, "findOne").mockResolvedValue(undefined);

      const result = await productRepository.findById(999);

      expect(result).toBeNull();
    });
  });

  describe("findByPartialCategoryAndName", () => {
    it("should return products by partial category and name", async () => {
      const mockProducts: ProductEntity[] = [
        {
          id: 1,
          name: "Product 1",
          category: "Category 1",
          technicalDetails: "Details",
          annualValue: "100.00",
          photos: "photo1.jpg",
        },
        {
          id: 2,
          name: "Product 2",
          category: "Category 2",
          technicalDetails: "Details",
          annualValue: "200.00",
          photos: "photo2.jpg",
        },
      ];
      jest.spyOn(repository, "createQueryBuilder").mockReturnValue({
        where: jest.fn().mockReturnThis(),
        andWhere: jest.fn().mockReturnThis(),
        getMany: jest.fn().mockResolvedValue(mockProducts),
      } as any);

      const result = await productRepository.findByPartialCategoryAndName(
        "category",
        "name",
      );

      expect(result).toHaveLength(2);
      expect(result[0]).toBeInstanceOf(Product);
      expect(result[1].name).toEqual("Product 2");
    });

    it("should return products by partial category when name is not provided", async () => {
      const mockProducts: ProductEntity[] = [
        {
          id: 1,
          name: "Product 1",
          category: "Category 1",
          technicalDetails: "Details",
          annualValue: "100.00",
          photos: "photo1.jpg",
        },
      ];
      jest.spyOn(repository, "createQueryBuilder").mockReturnValue({
        where: jest.fn().mockReturnThis(),
        andWhere: jest.fn().mockReturnThis(),
        getMany: jest.fn().mockResolvedValue(mockProducts),
      } as any);

      const result = await productRepository.findByPartialCategoryAndName(
        "category",
        "",
      );

      expect(result).toHaveLength(1);
      expect(result[0]).toBeInstanceOf(Product);
      expect(result[0].name).toEqual("Product 1");
    });

    it("should return products by partial name when category is not provided", async () => {
      const mockProducts: ProductEntity[] = [
        {
          id: 2,
          name: "Product 2",
          category: "Category 2",
          technicalDetails: "Details",
          annualValue: "200.00",
          photos: "photo2.jpg",
        },
      ];
      jest.spyOn(repository, "createQueryBuilder").mockReturnValue({
        where: jest.fn().mockReturnThis(),
        andWhere: jest.fn().mockReturnThis(),
        getMany: jest.fn().mockResolvedValue(mockProducts),
      } as any);

      const result = await productRepository.findByPartialCategoryAndName(
        "",
        "name",
      );

      expect(result).toHaveLength(1);
      expect(result[0]).toBeInstanceOf(Product);
      expect(result[0].name).toEqual("Product 2");
    });

    it("should return empty array when neither category nor name is provided", async () => {
      jest.spyOn(repository, "createQueryBuilder").mockReturnValue({
        where: jest.fn().mockReturnThis(),
        andWhere: jest.fn().mockReturnThis(),
        getMany: jest.fn().mockResolvedValue([]),
      } as any);

      const result = await productRepository.findByPartialCategoryAndName(
        "",
        "",
      );

      expect(result).toHaveLength(0);
    });
  });
});
