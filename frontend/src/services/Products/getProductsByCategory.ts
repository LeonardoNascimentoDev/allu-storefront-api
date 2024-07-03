import { Dispatch, SetStateAction } from 'react'
import { Products } from '../../types/Products'

async function getProductsByCategory(
  setProducts: Dispatch<SetStateAction<Products[]>>,
  categoryName: string
) {
  try {
    const url = `http://localhost:4000/products/search/category?category=${categoryName}`;
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
