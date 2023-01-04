import clsx from "clsx";
import Image from "next/image";
import Body from "../Body/Body";
import ArrowRight from "../icons/ArrowRight";
import ProductInfoText from "./ProductInfoText";

type ProductCardsProps = {
  shadow?: boolean;
};

export default function ProductCard({ shadow = false }: ProductCardsProps) {
  return (
    <div
      className={clsx(
        `bg-white px-10 pt-5 pb-8 mt-10 flex flex-col gap-8 shadow `,
        `${shadow ? "shadow-5xl" : ""}`
      )}
    >
      <div className="flex flex-col gap-8 md:justify-center md:items-center">
        <Body fontWeight="font-black" fontSize="text-lg">
          Brincar com fogo
        </Body>
        <Image
          src="/cardImage.jpeg"
          alt="Card image"
          width={230}
          height={330}
        />

        <div className="flex flex-col md:w-full md:text-center">
          <ProductInfoText title={"Cor: "} description={"Verde"} />
          <ProductInfoText title={"Tipo: "} description={"Instant"} />
          <ProductInfoText title={"Edição: "} description={"Dominária"} />
        </div>
        <div className="flex flex-row justify-between items-center cursor-pointer w-full">
          <Body
            fontWeight="font-bold"
            color="text-light-info"
            fontSize="text-lg"
          >
            R$ 1.000,00
          </Body>
          <ArrowRight />
        </div>
      </div>
    </div>
  );
}
