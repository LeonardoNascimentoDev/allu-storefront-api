import { Test, TestingModule } from "@nestjs/testing";
import { getRepositoryToken } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Category } from "src/domain/models/category.model";
import { WinstonLoggerService } from "src/logging/winston-logger.service";
import { CategoryRepositoryMySQL } from "src/adapters/persistence/typeorm/category.repository.mysql";
import { CategoryEntity } from "src/adapters/persistence/typeorm/category.entity";
import { InternalServerErrorException } from "@nestjs/common";

const mockWinstonLoggerService = {
  log: jest.fn(),
  error: jest.fn(),
  warn: jest.fn(),
  debug: jest.fn(),
  verbose: jest.fn(),
};

describe("CategoryRepositoryMySQL", () => {
  let repository: Repository<CategoryEntity>;
  let categoryRepository: CategoryRepositoryMySQL;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CategoryRepositoryMySQL,
        {
          provide: getRepositoryToken(CategoryEntity),
          useClass: Repository,
        },
        {
          provide: WinstonLoggerService,
          useValue: mockWinstonLoggerService,
        },
      ],
    }).compile();

    categoryRepository = module.get<CategoryRepositoryMySQL>(
      CategoryRepositoryMySQL,
    );
    repository = module.get<Repository<CategoryEntity>>(
      getRepositoryToken(CategoryEntity),
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should be defined", () => {
    expect(categoryRepository).toBeDefined();
  });

  describe("findAllCategories", () => {
    it("should return an array of categories", async () => {
      const mockCategories: CategoryEntity[] = [
        {
          id: 1,
          category: "Category 1",
          photo: "photo1.jpg",
        },
        {
          id: 2,
          category: "Category 2",
          photo: "photo2.jpg",
        },
      ];
      jest.spyOn(repository, "find").mockResolvedValue(mockCategories);

      const result = await categoryRepository.findAllCategories();

      expect(result).toHaveLength(2);
      expect(result[0]).toBeInstanceOf(Category);
      expect(result[1].category).toEqual("Category 2");
    });

    it("should handle errors and throw InternalServerErrorException", async () => {
      jest
        .spyOn(repository, "find")
        .mockRejectedValue(new Error("Database error"));

      await expect(async () => {
        await categoryRepository.findAllCategories();
      }).rejects.toThrow(InternalServerErrorException);
    });
  });
});
