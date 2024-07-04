import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { Container } from '../../styles/pages/Product'
import getAllProducts from '../../services/Products/getAllProducts'
import ProductCard from '../../components/ProductCard'
import { v4 as uuid } from 'uuid'
import { Products } from '../../types/Products'

const ShopPage: NextPage = (): JSX.Element => {
  const [products, setProducts] = useState<Products[]>([])

  const mountProducts = async () => {
    await getAllProducts(setProducts)
  }

  useEffect(() => {
    mountProducts()
  }, [])

  return (
    <Container>
      <h1 className="title">Produtos disponíveis para asssinatura</h1>
      <div className="cards">
        {products.map((product) => (
          <ProductCard key={uuid()} product={product} />
        ))}
      </div>
    </Container>
  )
}

export default ShopPage
