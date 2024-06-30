import { NextPage } from 'next';
import { Container } from '../../styles/pages/Cart';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from '../../redux/cart.slice';

interface Cart {
  id: number;
  quantity: number;
  annualValue: number;
  name: string;
  photos: string;
}

const CartPage: NextPage = (): JSX.Element => {
  const cart = useSelector((state: RootStateOrAny) => state.cart);
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator: number, item: Cart) =>
        accumulator + item.quantity * item.annualValue,
      0
    );
  };

  const getPhotosArray = (photos: string): string[] => {
    if (!photos) return [];
    const photoUrls = photos
      .replace(/[\[\]"]/g, '')
      .split(',')
      .map(photo => photo.trim())
      .filter(photo => {
        const lowerCasePhoto = photo.toLowerCase();
        return lowerCasePhoto.endsWith('.png') 
      });

    return photoUrls;
  };

  return (
    <Container>
      {cart.length === 0 ? (
        <h1>Seu carrinho está vazio!</h1>
      ) : (
        <>
          <div className="header">
            <div>Imagem</div>
            <div>Produto</div>
            <div>Preço</div>
            <div>Quantidade</div>
            <div>Ações</div>
            <div>Total</div>
          </div>

          {cart.map((item: Cart) => (
            <div key={item.id} className="body">
              <div className="image">
                {item.photos ? (
                  getPhotosArray(item.photos).length > 0 ? (
                    getPhotosArray(item.photos).map((photoUrl, index) => (
                      <Image key={index} src={photoUrl} height={90} width={65} alt="carrinho"/>
                    ))
                  ) : (
                    <div>Nenhuma imagem disponível</div>
                  )
                ) : (
                  <div>Nenhuma imagem disponível</div>
                )}
              </div>
              <p>{item.name}</p>
              <p>R$ {item.annualValue}</p>
              <p>{item.quantity}</p>
              <div className="buttons">
                <button onClick={() => dispatch(incrementQuantity(item.id))}>
                  +
                </button>
                <button onClick={() => dispatch(decrementQuantity(item.id))}>
                  -
                </button>
                <button onClick={() => dispatch(removeFromCart(item.id))}>
                  X
                </button>
              </div>
              <p>R$ {item.quantity * item.annualValue}</p>
            </div>
          ))}
          <h2>Total de assinaturas: R$ {getTotalPrice()}</h2>
        </>
      )}
    </Container>
  );
};

export default CartPage;
