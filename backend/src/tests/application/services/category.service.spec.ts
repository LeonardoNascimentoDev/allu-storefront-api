import { Test, TestingModule } from "@nestjs/testing";
import { CategoryRepository } from "src/domain/ports/category.repository";
import { Category } from "src/domain/models/category.model";
import { CategoryService } from "src/application/services/category.service";

describe("CategoryService", () => {
  let categoryService: CategoryService;
  let categoryRepository: CategoryRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CategoryService,
        {
          provide: "CategoryRepository",
          useValue: {
            findAllCategories: jest
              .fn()
              .mockResolvedValue([
                new Category(1, "Category 1", "photo1.jpg"),
                new Category(2, "Category 2", "photo2.jpg"),
              ]),
          },
        },
      ],
    }).compile();

    categoryService = module.get<CategoryService>(CategoryService);
    categoryRepository = module.get<CategoryRepository>("CategoryRepository");
  });

  it("should be defined", () => {
    expect(categoryService).toBeDefined();
  });

  describe("findAllCategories", () => {
    it("should return an array of categories", async () => {
      const result = await categoryService.findAllCategories();
      expect(result).toHaveLength(2);
      expect(result[0]).toBeInstanceOf(Category);
      expect(result[0].id).toEqual(1);
      expect(result[0].category).toEqual("Category 1");
      expect(result[1].id).toEqual(2);
      expect(result[1].category).toEqual("Category 2");
    });

    it("should call findAllCategories method of CategoryRepository", async () => {
      const findAllSpy = jest.spyOn(categoryRepository, "findAllCategories");

      await categoryService.findAllCategories();

      expect(findAllSpy).toHaveBeenCalled();
    });
  });
});
