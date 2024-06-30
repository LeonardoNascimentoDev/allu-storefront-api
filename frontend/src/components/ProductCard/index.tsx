import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cart.slice';
import { AppDispatch } from '../../redux/store';
import { Card, Title } from '../../styles/components/ProductCard';
import { ProductsAllu } from '../../types/ProductsAllu';

interface ProductProps {
  product: ProductsAllu;
}

function ProductCard({ product }: ProductProps): JSX.Element {
  const dispatch: AppDispatch = useDispatch();

  const photos = product.photos.replace(/[\[\]"]/g, '').split(',');
  const imageUrl = photos.length > 0 ? photos[0].trim() : null;

  if (!imageUrl) {
    return <div>Nenhuma imagem disponível</div>;
  }

  return (
    <Card>
      <Image src={imageUrl} alt={product.name} height={420} width={420} />
      <Title>{product.name}</Title>
      <h3 className="category">{product.category}</h3>
      <p>R$ {product.annualValue}</p>
      <button className="button" onClick={() => dispatch(addToCart(product))}>
        Assinar
      </button>
    </Card>
  );
}

export default ProductCard;
