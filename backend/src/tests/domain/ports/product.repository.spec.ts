import { Product } from "src/domain/models/product.model";
import { ProductRepository } from "src/domain/ports/product.repository";

class MockProductRepository implements ProductRepository {
  async findAll(): Promise<Product[]> {
    return [];
  }

  async findById(id: number): Promise<Product | null> {
    if (id === 1) {
      return {
        id: 1,
        name: "Test Product",
        category: "Test Category",
        technical_details: "Test Details",
        annual_value: 100.0,
        photos: "test.jpg",
      };
    }
    return null;
  }

  async findByPartialCategoryAndName(
    category: string,
    name: string,
  ): Promise<Product[]> {
    const products: Product[] = [
      {
        id: 1,
        name: "Product 1",
        category: "Category 1",
        technical_details: "Details",
        annual_value: 100.0,
        photos: "photo1.jpg",
      },
      {
        id: 2,
        name: "Product 2",
        category: "Category 2",
        technical_details: "Details",
        annual_value: 200.0,
        photos: "photo2.jpg",
      },
    ];

    const filteredProducts = products.filter(
      (product) =>
        product.category.toLowerCase().includes(category.toLowerCase()) &&
        product.name.toLowerCase().includes(name.toLowerCase()),
    );

    return filteredProducts;
  }
}

describe("ProductRepository", () => {
  let repository: ProductRepository;

  beforeEach(() => {
    repository = new MockProductRepository();
  });

  it("should have findByPartialCategoryAndName method", async () => {
    const result = await repository.findByPartialCategoryAndName(
      "Category 1",
      "Product 1",
    );

    expect(result).toHaveLength(1);
    expect(result[0].id).toEqual(1);
    expect(result[0].name).toEqual("Product 1");
  });
});
