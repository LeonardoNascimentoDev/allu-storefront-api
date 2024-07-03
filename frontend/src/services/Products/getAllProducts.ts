import { Dispatch, SetStateAction } from 'react'
import { Products } from '../../types/Products'

async function getAllProducts(
  setProducts: Dispatch<SetStateAction<Products[]>>
) {
  fetch('http://localhost:4000/products')
    .then((res) => res.json())
    .then((json) => setProducts(json))
}

export default getAllProducts
