import Image from "next/image";
import Body from "../../Body/Body";
import TrashIcon from "../../icons/Trash";
import ProductInfoText from "../../ProductCard/ProductInfoText";

export default function CartItem() {
  return (
    <div className="flex flex-col gap-8 md:justify-center md:items-center pb-4 border-b">
      <div className="flex flex-row gap-4">
        <Image src="/cardImage.jpeg" alt="Card image" width={90} height={180} />
        <div>
          <Body fontWeight="font-black">Brincar com fogo</Body>
          <div className="flex flex-col md:w-full md:text-center gap-2">
            <div>
              <ProductInfoText
                title={"Em estoque: "}
                description={"2x"}
                titleClassName={"whitespace-nowrap"}
                className={"gap-1"}
              />

              <ProductInfoText title={"Valor Unit:"} description={"R$ 25,50"} />
              <ProductInfoText
                title={"Valor total:"}
                description={"R$ 51,00"}
              />
            </div>
            <div className="flex flex-row place-items-center gap-2">
              <input
                id="quantity"
                placeholder="Qtd"
                min={1}
                type={"number"}
                className="pl-1 text-primary h-6 border border-dark-primary outline-0 focus:outline-none w-full placeholder:text-sm"
              />
              <TrashIcon fill={"#eb2d66"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
