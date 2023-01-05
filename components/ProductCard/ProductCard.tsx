import clsx from "clsx";
import Image from "next/image";
import { useContext } from "react";
import { useCartContext } from "../../contexts/CartContext";
import { formatCurrencyBrl } from "../../utils/format";
import Body from "../Body/Body";
import ArrowRight from "../icons/ArrowRight";
import CartIcon from "../icons/CartIcon";
import NextPage from "../NextPage/NextPage";
import ProductInfoText from "./ProductInfoText";

export type Card = {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
};

type ProductCardsProps = {
  shadow?: boolean;
  card: Card;
};

export default function ProductCard({
  shadow = false,
  card
}: ProductCardsProps) {
  const cartContext = useCartContext();

  return (
    <div
      className={clsx(
        `bg-white px-10 pt-5 pb-8 mt-10 flex flex-col gap-8 shadow place-items-center `,
        `${shadow ? "shadow-5xl" : ""}`
      )}
    >
      <div className="flex flex-col gap-8 md:place-items-center">
        <Body fontWeight="font-black" fontSize="text-lg">
          {card.name}
        </Body>

        <div className="flex flex-col md:w-full md:text-start">
          <Image src={card.image} alt="Card image" width={230} height={330} />

          <ProductInfoText
            title={"Cor: "}
            description={"Verde"}
            className={"mt-3"}
          />
          <ProductInfoText title={"Tipo: "} description={"Instant"} />
          <ProductInfoText title={"Edição: "} description={"Dominária"} />
        </div>

        <NextPage
          pageTitle={formatCurrencyBrl(card.price)}
          Icon={CartIcon}
          onClick={() => cartContext?.addItemToCart(card)}
        />
      </div>
    </div>
  );
}
