import Image, { ImageProps } from 'next/image'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../redux/store'
import { Product } from '../../types/Product'

interface ProductProps {
  product: Product
}



