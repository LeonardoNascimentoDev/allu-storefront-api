import { Dispatch, SetStateAction } from 'react'
import { ProductsAllu } from '../../types/ProductsAllu'

async function getAllProducts(
  setProducts: Dispatch<SetStateAction<ProductsAllu[]>>
) {
  fetch('http://localhost:4000/products')
    .then((res) => res.json())
    .then((json) => setProducts(json))
}

export default getAllProducts
