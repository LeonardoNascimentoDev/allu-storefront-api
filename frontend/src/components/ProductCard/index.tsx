import Image from 'next/image';
// import { useDispatch } from 'react-redux';
// import { addToCart } from '../../redux/cart.slice';
// import { AppDispatch } from '../../redux/store';
import { Card, Title } from '../../styles/components/ProductCard';
import { ProductsAllu } from '../../types/ProductsAllu';
import { useRouter } from 'next/router'; 

interface ProductProps {
  product: ProductsAllu;
}

function ProductCard({ product }: ProductProps): JSX.Element {
 //const dispatch: AppDispatch = useDispatch();
  const router = useRouter(); 

  const photos = product.photos.replace(/[\[\]"]/g, '').split(',');
  const imageUrl = photos.length > 0 ? photos[0].trim() : null;

  if (!imageUrl) {
    return <div>Nenhuma imagem disponível</div>;
  }

  const handleCardClick = () => {
    // Redirect to the product details page
    router.push(`/product/${product.id}`);
  };

  return (
    <Card onClick={handleCardClick} style={{ cursor: 'pointer' }}>
      <Image src={imageUrl} alt={product.name} height={420} width={420} />
      <Title>{product.name}</Title>
      <h3 className="category">{product.category}</h3>
      <p>R$ {product.annualValue}</p>
      {/* <button className="button" onClick={() => dispatch(addToCart(product))}>
        Assinar
      </button> */}
    </Card>
  );
}

export default ProductCard;
