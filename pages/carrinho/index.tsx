import { useRef } from "react";
import Body from "../../components/Body/Body";
import MobileCart from "../../components/Cart/MobileCart/MobileCart";
import WebCart from "../../components/Cart/WebCart/WebCart";
import Container from "../../components/Container/Container";
import H1 from "../../components/H1/H1";
import MyHead from "../../components/MyHead/MyHead";
import NextPage from "../../components/NextPage/NextPage";

export default function Cart() {
  const quantityRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <MyHead title="Calabouço do Android - Carrinho" />
      <Container>
        <H1>Cart</H1>
        <div>
          <MobileCart />
          <WebCart />
          <div className="bg-primary p-5 shadow">
            <div className="flex flex-row justify-between items-center">
              <Body fontWeight="font-medium" color="text-white">
                Total
              </Body>
              <Body fontWeight="font-medium" color="text-white">
                R$ 51,00
              </Body>
            </div>
          </div>
        </div>

        <NextPage pageTitle="Finalizar compra" />
      </Container>
    </>
  );
}
