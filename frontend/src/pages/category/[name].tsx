import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import ProductCard from '../../components/ProductCard'
import { Container } from '../../styles/pages/Shop'
import getProductsByCategory from '../../services/Products/getProductsByCategory'
import { ProductsAllu } from '../../types/ProductsAllu'

const CategoryPage: NextPage = (): JSX.Element => {
  const router = useRouter()

  const productName: string = `${router.query.name}`

  const [products, setProducts] = useState<ProductsAllu[]>([])

  const mountProducts = async () => {
    await getProductsByCategory(setProducts, productName)
  }

  useEffect(() => {
    mountProducts()
  })

  return (
    <Container>
      <h1 className="title">Resultados para {router.query.name}</h1>
      <div className="cards">
        {products.map((product: ProductsAllu) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Container>
  )
}

export default CategoryPage
