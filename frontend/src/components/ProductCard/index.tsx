import Image from 'next/image';
import { Card, Title, Details } from '../../styles/components/ProductCard';
import { Products } from '../../types/Products';
import { useRouter } from 'next/router'; 

interface ProductProps {
  product: Products;
}

function ProductCard({ product }: ProductProps): JSX.Element {
  const router = useRouter(); 

  const photos = product.photos.replace(/[\[\]"]/g, '').split(',');
  const imageUrl = photos.length > 0 ? photos[0].trim() : null;

  const handleCardClick = () => {
    // Redirect to the product details page
    router.push(`/product/${product.id}`);
  };

  return (
    <Card onClick={handleCardClick} style={{ cursor: 'pointer' }}>
      {!imageUrl ? <div>Nenhuma imagem disponível</div> 
        : <Image src={imageUrl} alt={product.name} height={220} width={196} />}
      <Title>{product.name}</Title>
      <Details>{product.technicalDetails}</Details>
      <p>R$ {product.annualValue}</p>
      {/* <button className="button" onClick={() => dispatch(addToCart(product))}>
        Assinar
      </button> */}
    </Card>
  );
}

export default ProductCard;
