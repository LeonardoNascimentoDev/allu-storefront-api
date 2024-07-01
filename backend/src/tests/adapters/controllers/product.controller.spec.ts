import { Test, TestingModule } from "@nestjs/testing";
import { ProductController } from "src/adapters/controllers/product.controller";
import { ProductService } from "src/application/services/product.service";
import { Product } from "src/domain/models/product.model";

describe("ProductController", () => {
  let productController: ProductController;
  let productService: ProductService;

  const mockProduct: Product = {
    id: 1,
    name: "Test Product",
    category: "Test Category",
    technicalDetails: "Some technical details",
    annualValue: "1000",
    photos: '"photo1.jpg", "photo2.jpg"',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductController],
      providers: [
        {
          provide: ProductService,
          useValue: {
            findAll: jest.fn().mockResolvedValue([mockProduct]),
            findById: jest.fn().mockResolvedValue(mockProduct),
            findByPartialCategoryAndName: jest
              .fn()
              .mockResolvedValue([mockProduct]),
          },
        },
      ],
    }).compile();

    productController = module.get<ProductController>(ProductController);
    productService = module.get<ProductService>(ProductService);
  });

  it("should be defined", () => {
    expect(productController).toBeDefined();
  });

  describe("getAllProducts", () => {
    it("should return an array of products", async () => {
      expect(await productController.getAllProducts()).toEqual([mockProduct]);
    });
  });

  describe("getProductById", () => {
    it("should return a product by id", async () => {
      expect(await productController.getProductById(1)).toBe(mockProduct);
    });

    it("should return null if no product is found", async () => {
      jest.spyOn(productService, "findById").mockResolvedValue(null);

      expect(await productController.getProductById(999)).toBeNull();
    });
  });

  describe("getProductsByPartialCategoryAndName", () => {
    it("should return an array of products by partial category or name", async () => {
      expect(
        await productController.getProductsByPartialCategoryAndName(
          "Test",
          "Product",
        ),
      ).toEqual([mockProduct]);
    });

    it("should return an empty array if no products match the partial category or name", async () => {
      jest
        .spyOn(productService, "findByPartialCategoryAndName")
        .mockResolvedValue([]);

      expect(
        await productController.getProductsByPartialCategoryAndName(
          "Nonexistent",
          "Product",
        ),
      ).toEqual([]);
    });
  });
});
