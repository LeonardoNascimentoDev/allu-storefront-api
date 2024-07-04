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
    router.push(`/product/${product.id}`);
  };

  return (
    <Card onClick={handleCardClick} style={{ cursor: 'pointer' }}>
      {!imageUrl ? <div>Nenhuma imagem disponível</div> 
        : <Image src={imageUrl} alt={product.name} height={220} width={196} />}
      <Title>{product.name}</Title>
      <Details>{product.technical_details}</Details>
      <p>R$ {product.annual_value}</p>
    </Card>
  );
}

export default ProductCard;
