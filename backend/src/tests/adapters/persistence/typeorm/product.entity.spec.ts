import { ProductEntity } from "src/adapters/persistence/typeorm/product.entity";

describe("ProductEntity", () => {
  it("should create a new instance", () => {
    const product = new ProductEntity();
    expect(product).toBeDefined();
  });

  it("should have properties defined", () => {
    const product = new ProductEntity();
    expect(product.id).toBeUndefined();
    expect(product.name).toBeUndefined();
    expect(product.category).toBeUndefined();
    expect(product.technicalDetails).toBeUndefined();
    expect(product.annualValue).toBeUndefined();
    expect(product.photos).toBeUndefined();
  });

  it("should set properties correctly", () => {
    const product = new ProductEntity();
    product.name = "Test Product";
    product.category = "Test Category";
    product.technicalDetails = "Test Technical Details";
    product.annualValue = "1000.00";
    product.photos = "photo1.jpg,photo2.jpg";

    expect(product.name).toEqual("Test Product");
    expect(product.category).toEqual("Test Category");
    expect(product.technicalDetails).toEqual("Test Technical Details");
    expect(product.annualValue).toEqual("1000.00");
    expect(product.photos).toEqual("photo1.jpg,photo2.jpg");
  });
});
