import { Categories } from '@/src/types/Categories'
import { Dispatch, SetStateAction } from 'react'

async function getAllCategories(
  setCategories: Dispatch<SetStateAction<Categories[]>>

) {
  fetch('http://localhost:4000/categories')
    .then((res) => res.json())
    .then((json) => setCategories(json))
}

export default getAllCategories
