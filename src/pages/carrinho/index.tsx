import Head from 'next/head';
import { useRouter } from 'next/router';
import Body from '../../components/Body/Body';
import Button from '../../components/Button/Button';
import MobileCart from '../../components/Cart/MobileCart/MobileCart';
import WebCart from '../../components/Cart/WebCart/WebCart';
import Container from '../../components/Container/Container';
import H1 from '../../components/H1/H1';
import CartIcon from '../../components/icons/CartIcon';
import Link from '../../components/Link/Link';
import TextWithIcon from '../../components/TextWithIcon/TextWithIcon';
import { useCartContext } from '../../contexts/CartContext';
import { formatCurrencyBrl } from '../../utils/format';
import { totalValues } from '../../utils/products';

export default function Cart() {
  const cartContext = useCartContext();

  const emptyCart =
    cartContext?.cart.cards && cartContext?.cart.cards.length === 0;

  const router = useRouter();

  return (
    <>
      <Head>
        <title>Calabouço do Android - Carrinho</title>
      </Head>
      <Container>
        <H1>Carrinho</H1>
        {emptyCart && (
          <div className="flex items-center justify-center mt-8">
            <div className="p-8 border border-gray-100  rounded">
              <Body fontWeight="font-medium" color="text-primary">
                Seu carrinho está vazio.{' '}
              </Body>

              <Body color="text-primary">
                <Link color="text-dark-primary">
                  Adicione produtos para continuar.
                </Link>
              </Body>
              <Button
                variant="primary"
                className="mt-5"
                textClassName="flex flex-row gap-4 items-center justify-center"
                onClick={() => router.push('/')}
              >
                <CartIcon fill="white" />
                <span>Continuar comprando</span>
              </Button>
            </div>
          </div>
        )}
        {!emptyCart && (
          <>
            <div>
              <MobileCart cards={cartContext?.cart.cards} />
              <WebCart cards={cartContext?.cart.cards} />
              <div className="bg-primary p-5 shadow">
                <div className="flex flex-row justify-between items-center">
                  <Body fontWeight="font-medium" color="text-white">
                    Total
                  </Body>
                  <Body fontWeight="font-medium" color="text-white">
                    {formatCurrencyBrl(totalValues(cartContext?.cart.cards))}
                  </Body>
                </div>
              </div>
            </div>
            <TextWithIcon text="Finalizar compra" />
          </>
        )}
      </Container>
    </>
  );
}
