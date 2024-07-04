'use server'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Container } from '../../styles/pages/Home'

import { Categories } from '../../types/Categories'
import getAllCategories from '../../services/Categories/getAllCategories'
import getProductsByCategory from '../../services/Products/getProductsByCategory'
import { Products } from '@/src/types/Products'
import CategoryList from '@/src/components/CategoryList'
import ProductList from '@/src/components/ProductList'


const CategoryPage: NextPage = (): JSX.Element => {
  const router = useRouter()
  const { name } = router.query

  const [products, setProducts] = useState<Products[]>([])
  const [categories, setCategories] = useState<Categories[]>([])

  
  const getProducts = async (category: string) => {
    await getProductsByCategory(setProducts, category)
  }

  const getCategories = async () => {
    await getAllCategories(setCategories)
  }

  useEffect(() => {
    getCategories()
    getProducts(name as string)
  }, [name])
  console.log('isUndefined', name)
  return (
    <Container>
      <div className="title">
        <h2>{name === 'all' || name === undefined ? 'Todos' : name}</h2>
        <h2> ({products?.length})</h2>
      </div>
      <CategoryList categories={categories} />
      <ProductList products={products} />
    </Container>
  )
}

export default CategoryPage
