import { CategoryEntity } from "src/adapters/persistence/typeorm/category.entity";

describe("CategoryEntity", () => {
  it("should create a new instance", () => {
    const category = new CategoryEntity();
    expect(category).toBeDefined();
  });

  it("should have properties defined", () => {
    const category = new CategoryEntity();
    expect(category.id).toBeUndefined();
    expect(category.category).toBeUndefined();
    expect(category.photo).toBeUndefined();
  });

  it("should set properties correctly", () => {
    const category = new CategoryEntity();
    category.category = "Test Category";
    category.photo = "photo1.jpg";

    expect(category.category).toEqual("Test Category");
    expect(category.photo).toEqual("photo1.jpg");
  });
});
