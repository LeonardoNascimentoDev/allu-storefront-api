/* eslint-disable @typescript-eslint/no-unused-vars */
import ProductCard from '../../components/ProductCard'
import { v4 as uuid } from 'uuid'
import { Products } from '@/src/types/Products'
import { ProductContainer } from '@/src/styles/components/ProductList'

interface ProductListProps {
  products: Products[]
}

function ProductList(props: ProductListProps): JSX.Element {
  const { products } = props

  return (
    <ProductContainer>
      <div className='productContainer'>
        <div className='productContent'>
          {products.map((item, index) => (
            <ProductCard
              key={uuid()}
              product={item}
            />
          ))}
        </div>
      </div>
    </ProductContainer>
  )
}

export default ProductList
