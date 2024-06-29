import { Dispatch, SetStateAction } from 'react'
import { Product } from '../../../types/Product'

async function getAllProducts(
  setProducts: Dispatch<SetStateAction<Product[]>>
) {
  fetch('http://localhost:3000/products')
    .then((res) => res.json())
    .then((json) => setProducts(json))
}

export default getAllProducts
