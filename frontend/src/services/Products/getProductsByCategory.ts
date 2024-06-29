import { Dispatch, SetStateAction } from 'react'
import { Product } from '../../../types/Product'

async function getProductsByCategory(
  setProducts: Dispatch<SetStateAction<Product[]>>,
  name: string,
  categoryName: string
) {
  fetch(`http://localhost:3000/products/category?${categoryName}?name${name}`)
    .then((res) => res.json())
    .then((json) => setProducts(json))
}

export default getProductsByCategory
