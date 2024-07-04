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
    expect(product.technical_details).toBeUndefined();
    expect(product.annual_value).toBeUndefined();
    expect(product.photos).toBeUndefined();
  });

  it("should set properties correctly", () => {
    const product = new ProductEntity();
    product.name = "Test Product";
    product.category = "Test Category";
    product.technical_details = "Test Technical Details";
    product.annual_value = 1000.0;
    product.photos = "photo1.jpg,photo2.jpg";

    expect(product.name).toEqual("Test Product");
    expect(product.category).toEqual("Test Category");
    expect(product.technical_details).toEqual("Test Technical Details");
    expect(product.annual_value).toEqual(1000.0);
    expect(product.photos).toEqual("photo1.jpg,photo2.jpg");
  });
});
