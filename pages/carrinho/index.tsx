import clsx from "clsx";
import Image from "next/image";
import { RefObject, useRef } from "react";
import Body from "../../components/Body/Body";
import Container from "../../components/Container/Container";
import H1 from "../../components/H1/H1";
import ArrowRight from "../../components/icons/ArrowRight";
import TrashIcon from "../../components/icons/Trash";
import MyHead from "../../components/MyHead/MyHead";
import ProductInfoText from "../../components/ProductCard/ProductInfoText";

const MobileCart = ({
  quantityRef
}: {
  quantityRef: RefObject<HTMLInputElement>;
}) => {
  return (
    <div className="block lg:hidden">
      <div
        className={clsx(
          `bg-white px-10 pt-5 pb-8 mt-10 flex flex-col gap-8 shadow `
        )}
      >
        <div className="flex flex-col gap-8 md:justify-center md:items-center">
          <div className="flex flex-row gap-4">
            <Image
              src="/cardImage.jpeg"
              alt="Card image"
              width={100}
              height={200}
            />
            <div>
              <Body fontWeight="font-black">Brincar com fogo</Body>
              <div className="flex flex-col md:w-full md:text-center gap-2">
                <div>
                  <ProductInfoText title={"Quantidade: "} description={"2x"} />

                  <ProductInfoText
                    title={"Valor Unit: "}
                    description={"R$ 25,50"}
                  />
                  <ProductInfoText
                    title={"Valor total: "}
                    description={"R$ 51,00"}
                  />
                </div>

                <input
                  id="quantity"
                  ref={quantityRef}
                  placeholder="Qtd"
                  min={1}
                  type={"number"}
                  className="pl-1 text-primary h-8 border border-dark-primary outline-0 focus:outline-none w-full"
                />
                <TrashIcon fill={"#eb2d66"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const WebCart = ({
  quantityRef
}: {
  quantityRef: RefObject<HTMLInputElement>;
}) => {
  return (
    <div className="shadow-sm overflow-x-scroll my-8 hidden lg:block">
      <table className="border-collapse table-auto w-full text-sm">
        <thead>
          <tr>
            <th className="border-b border-b-primary text-left font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 whitespace-nowrap">
              Produto
            </th>

            <th className="border-b border-b-primary text-left font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 whitespace-nowrap">
              Valor Unit
            </th>
            <th className="border-b border-b-primary text-left font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 whitespace-nowrap">
              Valor Total
            </th>
            <th className="border-b border-b-primary text-left font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 whitespace-nowrap">
              Ações
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          <tr className="transition-all duration-300 ease cursor-pointer hover:bg-dark-primary hover:text-white hover:shadow-lg ">
            <td className="border-slate-100 p-4 pl-8 text-slate-500 flex flex-row items-center gap-4">
              <Image
                src="/cardImage.jpeg"
                alt="Card image"
                width={50}
                height={150}
              />
              The Sliding Mr. Bones (Next Stop, Pottersville)
            </td>
            <td className="border-slate-100 p-4 text-slate-500">
              Malcolm Lockyer
            </td>
            <td className="border-slate-100 p-4 pr-8 text-slate-500">1961</td>
            <td className="border-slate-100 p-4 pl-8 text-slate-500 ">
              <div className="flex flex-row items-center justify-center gap-4">
                <input
                  id="quantity"
                  ref={quantityRef}
                  placeholder="Qtd"
                  min={1}
                  type={"number"}
                  className="pl-1 text-primary h-8 border border-dark-primary outline-0 focus:outline-none"
                />
                <TrashIcon fill={"#eb2d66"} />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default function Cart() {
  const quantityRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <MyHead title="Calabouço do Android - Carrinho" />
      <Container>
        <H1>Cart</H1>
        <MobileCart quantityRef={quantityRef} />
        <WebCart quantityRef={quantityRef} />
        <div className="flex flex-row justify-between items-center cursor-pointer w-full mt-8">
          <Body
            fontWeight="font-bold"
            color="text-info-light"
            fontSize="text-lg"
          >
            Finalizar compra
          </Body>
          <ArrowRight />
        </div>
      </Container>
    </>
  );
}
