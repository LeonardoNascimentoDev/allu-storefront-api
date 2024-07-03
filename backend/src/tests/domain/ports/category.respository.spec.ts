import { CategoryRepository } from "src/domain/ports/category.repository";
import { Category } from "src/domain/models/category.model";

class MockCategoryRepository implements CategoryRepository {
  async findAllCategories(): Promise<Category[]> {
    const categories: Category[] = [
      {
        id: 1,
        category: "Category 1",
        photo: "image.png",
      },
      {
        id: 2,
        category: "Category 2",
        photo: "image.png2",
      },
    ];

    return categories;
  }
}

describe("MockCategoryRepository", () => {
  let repository: CategoryRepository;

  beforeEach(() => {
    repository = new MockCategoryRepository();
  });

  it("should have findAllCategories method returning categories", async () => {
    const result = await repository.findAllCategories();

    expect(result).toHaveLength(2);
    expect(result[0].id).toEqual(1);
    expect(result[0].category).toEqual("Category 1");
    expect(result[1].id).toEqual(2);
    expect(result[1].category).toEqual("Category 2");
  });
});
