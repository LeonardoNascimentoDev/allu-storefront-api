import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Container } from '../../styles/pages/Shop'
import getProductsByCategory from '../../services/Products/getProductsByCategory'
import { Product } from '../../types/Product'

const CategoryPage: NextPage = (): JSX.Element => {
  const router = useRouter()

  const categoryName: string = `${router.query.name}`
  const [products, setProducts] = useState<Product[]>([])

  const mountProducts = async () => {
    await getProductsByCategory(setProducts, categoryName)
  }

  useEffect(() => {
    mountProducts()
  }, [])

  return (
    <Container>
      <h1 className="title">Resultados para {router.query.name}</h1>

    </Container>
  )
}

export default CategoryPage
