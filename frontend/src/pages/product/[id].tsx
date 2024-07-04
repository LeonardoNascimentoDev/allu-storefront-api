import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
// import Slider from 'react-slick';
import { Container, StyledButton } from '../../styles/pages/Product';
import getProductById from '../../services/Products/getProductById';
import { Product } from '../../types/Product';
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../redux/store'
import { addToCart } from '../../redux/cart.slice'


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

  const annualPrice = Number(product.annual_value);
  const monthlyPrice = (annualPrice / 12).toFixed(2);

  let imageUrls: string[] = [];
  try {
    imageUrls = JSON.parse(product.photos);
    console.log(imageUrls, 'AQUIIII33')
  } catch (error) {
    console.error('Erro ao parsear as URLs de imagem:', error);
    imageUrls = [];
  }

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };

  return (
    <Container>
      <div className="productContainer">
        <div className="productCarousel">
          {/* <Slider {...settings}>
            {imageUrls.map((img, index) => (
              <div key={index}>
                <img src={img.trim()} alt={`Product image ${index + 1}`} />
              </div>
            ))}
          </Slider> */}
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
