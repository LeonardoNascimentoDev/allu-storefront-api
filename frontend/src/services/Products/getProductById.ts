import { Dispatch, SetStateAction } from "react";
import { Product } from "../../types/Product";

async function getProductById(
  setProducts: Dispatch<SetStateAction<Product>>,
  id: string
) {
  try {
    const url = `http://localhost:4000/products/${id}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch product.");
    }

    const productData = await response.json();
    setProducts(productData);
  } catch (error) {
    console.error("Error fetching product:", error);
  }
}

export default getProductById;
