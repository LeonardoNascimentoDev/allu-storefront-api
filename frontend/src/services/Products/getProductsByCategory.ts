import { Dispatch, SetStateAction } from 'react'
import { ProductsAllu } from '../../types/ProductsAllu'

async function getProductsByCategory(
  setProducts: Dispatch<SetStateAction<ProductsAllu[]>>,
  productName: string,
  categoryName: string
) {
  try {
    const url = `http://localhost:4000/products/search/category?categoryName=${categoryName}&name=${productName}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Failed to fetch products.');
    }

    const json = await response.json();
    setProducts(json);
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

export default getProductsByCategory;
