import { Dispatch, SetStateAction } from 'react'

//Criar rota depois
async function getAllCategories(
  setCategories: Dispatch<SetStateAction<string[]>>
) {
  fetch('https://fakestoreapi.com/products/categories')
    .then((res) => res.json())
    .then((json) => setCategories(json))
}

export default getAllCategories
