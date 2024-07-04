import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import ProductCard from '../../components/ProductCard'
import { Container } from '../../styles/pages/Product'
import getProductById from '../../services/Products/getProductById'
import { Product } from '../../types/Product'

const ProductPage: NextPage = (): JSX.Element => {
  const router = useRouter()

  const productId: string = `${router.query.id}`

  const [product, setProduct] = useState<Product>(null)

  const mountProducts = async () => {
    await getProductById(setProduct, productId)
  }

  useEffect(() => {
    if(!productId) return
    mountProducts()
  }, [productId])

  if(!product) return <>'Nada ainda'</>;
  console.log('product', product)
  return (
    <Container>
      <div className="productContainer">
        <div className="productCarousel">
            {/* {products!.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))} */}
        </div>
        <div className="productInfo">
          <h2 className="title">{product!.name}</h2>
          <h4 className="description">{product!.technical_details}</h4>
          <div className='priceBox'>
            <span className="annualPrice">R$ {product!.annual_value}</span>
            <span className="monthlyPrice">R$ {product!.annual_value / 12}</span>
          </div>
        </div>
      </div>
      
    </Container>
  )
}

export default ProductPage
