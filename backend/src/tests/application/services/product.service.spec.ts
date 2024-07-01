import { Test, TestingModule } from "@nestjs/testing";
import { ProductService } from "src/application/services/product.service";
import { Product } from "src/domain/models/product.model";
import { ProductRepository } from "src/domain/ports/product.repository";

describe("ProductService", () => {
  let service: ProductService;
  let repositoryMock: Partial<ProductRepository>;

  beforeEach(async () => {
    repositoryMock = {
      findAll: jest.fn(),
      findById: jest.fn(),
      findByPartialCategoryAndName: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductService,
        {
          provide: "ProductRepository",
          useValue: repositoryMock,
        },
      ],
    }).compile();

    service = module.get<ProductService>(ProductService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  describe("findAll", () => {
    it("should return array of products", async () => {
      const mockProducts: Product[] = [
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

      (repositoryMock.findAll as jest.Mock).mockResolvedValue(mockProducts);

      const result = await service.findAll();

      expect(result).toEqual(mockProducts);
      expect(repositoryMock.findAll).toHaveBeenCalled();
    });
  });

  describe("findById", () => {
    it("should return a product by ID", async () => {
      const mockProduct: Product = {
        id: 1,
        name: "Product 1",
        category: "Category 1",
        technicalDetails: "Details",
        annualValue: "100.00",
        photos: "photo1.jpg",
      };

      (repositoryMock.findById as jest.Mock).mockResolvedValue(mockProduct);

      const result = await service.findById(1);

      expect(result).toEqual(mockProduct);
      expect(repositoryMock.findById).toHaveBeenCalledWith(1);
    });

    it("should return null when product is not found by ID", async () => {
      (repositoryMock.findById as jest.Mock).mockResolvedValue(null);

      const result = await service.findById(999);

      expect(result).toBeNull();
      expect(repositoryMock.findById).toHaveBeenCalledWith(999);
    });
  });

  describe("findByPartialCategoryAndName", () => {
    it("should return products by partial category and name", async () => {
      const mockProducts: Product[] = [
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

      (
        repositoryMock.findByPartialCategoryAndName as jest.Mock
      ).mockResolvedValue(mockProducts);

      const result = await service.findByPartialCategoryAndName(
        "category",
        "name",
      );

      expect(result).toEqual(mockProducts);
      expect(repositoryMock.findByPartialCategoryAndName).toHaveBeenCalledWith(
        "category",
        "name",
      );
    });
  });
});
