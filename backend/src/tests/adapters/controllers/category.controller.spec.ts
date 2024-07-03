import { Test, TestingModule } from "@nestjs/testing";
import { CategoryService } from "src/application/services/category.service";
import { WinstonLoggerService } from "src/logging/winston-logger.service";
import { InternalServerErrorException } from "@nestjs/common";
import { Category } from "src/domain/models/category.model";
import { CategoryController } from "src/adapters/controllers/category.controller";

describe("CategoryController", () => {
  let categoryController: CategoryController;
  let categoryService: CategoryService;
  let logger: WinstonLoggerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoryController],
      providers: [
        {
          provide: CategoryService,
          useValue: {
            findAllCategories: jest.fn(),
          },
        },
        {
          provide: WinstonLoggerService,
          useValue: {
            log: jest.fn(),
            error: jest.fn(),
          },
        },
      ],
    }).compile();

    categoryController = module.get<CategoryController>(CategoryController);
    categoryService = module.get<CategoryService>(CategoryService);
    logger = module.get<WinstonLoggerService>(WinstonLoggerService);
  });

  it("should be defined", () => {
    expect(categoryController).toBeDefined();
  });

  describe("getAllCategories", () => {
    it("should return an array of categories", async () => {
      const result: Category[] = [
        { id: 1, category: "Category 1", photo: "image.png" },
        { id: 2, category: "Category 2", photo: "image.png2" },
      ];

      jest
        .spyOn(categoryService, "findAllCategories")
        .mockResolvedValue(result);

      expect(await categoryController.getAllCategories()).toBe(result);
      expect(logger.log).toHaveBeenCalledWith("Retrieving all categories");
    });

    it("should throw an InternalServerErrorException when service throws an error", async () => {
      jest
        .spyOn(categoryService, "findAllCategories")
        .mockRejectedValue(new Error("Service error"));

      await expect(categoryController.getAllCategories()).rejects.toThrow(
        InternalServerErrorException,
      );
      expect(logger.error).toHaveBeenCalledWith(
        "Error retrieving all categories: Service error",
      );
    });
  });
});
