/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Container, StyledButton } from '../../styles/pages/Product';
import getProductById from '../../services/Products/getProductById';
import { Product } from '../../types/Product';
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../redux/store'
import { addToCart } from '../../redux/cart.slice'
import { Carousel } from 'react-responsive-carousel';

const ProductPage: NextPage = (): JSX.Element => {
  const dispatch: AppDispatch = useDispatch()
  const router = useRouter();
  const productId: string = `${router.query.id}`;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const mountProducts = async () => {
    try {
      await getProductById(setProduct, productId);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!productId) return;
    mountProducts();
  }, [productId]);

  if (loading) return <>Carregando...</>;

  if (!product) {
    return <>O produto não pôde ser carregado.</>;
  }

  const annualPrice = Number(product.annual_value).toFixed(2);
  const monthlyPrice = (Number(product.annual_value) / 12).toFixed(2);

  let imageUrls: string[] = [];
  try {
    imageUrls = JSON.parse(product.photos);
  } catch (error) {
    console.error('Erro ao parsear as URLs de imagem:', error);
    imageUrls = [];
  }

  return (
    <Container>
      <div className="productContainer">
        <div className="productCarousel">
          <Carousel>
            {imageUrls.map((img, index) => (
              <div key={index} className="sliderImageContainer">
                <img src={img.trim()} alt={`Product image ${index + 1}`} className="sliderImage" />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="productInfo">
          <h2 className="title">{product.name}</h2>
          <h4 className="description">{product.technical_details}</h4>
          <div className="priceBox">
            <span className="annualPrice"> Valor anual R$ {annualPrice}</span>
            <span className="monthlyPrice"> Valor mensal R$ {monthlyPrice}</span>
            <span></span>
          </div>
          <div className="priceBox">
            <StyledButton onClick={() => dispatch(addToCart(product))}>Assinar</StyledButton>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductPage;
