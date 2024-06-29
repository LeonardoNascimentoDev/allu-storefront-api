import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { Container } from '../../styles/pages/Shop'
import getAllProducts from '../../services/Products/getAllProducts'
import { Product } from '../../../types/Product'

const ShopPage: NextPage = (): JSX.Element => {
  const [products, setProducts] = useState<Product[]>([])

  const mountProducts = async () => {
    await getAllProducts(setProducts)
  }

  useEffect(() => {
    mountProducts()
  }, [])

  return (
    <Container>
      <h1 className="title">Todos itens</h1>
     
    </Container>
  )
}

export default ShopPage
