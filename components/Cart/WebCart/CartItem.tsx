import Image from "next/image";
import { ReactNode, RefObject } from "react";
import TrashIcon from "../../icons/Trash";

type ItemProps = {
  children: ReactNode;
};

const Item = ({ children }: ItemProps) => (
  <td className="border-slate-100 p-4 text-primary group-hover:text-white">
    {children}
  </td>
);

export default function CartItem() {
  return (
    <tr className="transition-all duration-300 ease cursor-pointer group border-b hover:bg-dark-primary hover:text-white">
      <Item>
        <div className="flex flex-row items-center gap-4">
          <Image
            src="/cardImage.jpeg"
            alt="Card image"
            width={50}
            height={150}
          />
          The Sliding Mr. Bones (Next Stop, Pottersville)
        </div>
      </Item>

      <Item>Malcolm Lockyer</Item>
      <Item>1961</Item>
      <Item>
        <div className="flex flex-row items-center justify-center">
          <input
            id="quantity"
            placeholder="Qtd"
            min={1}
            type={"number"}
            className="pl-1 text-primary h-8 border border-dark-primary outline-0 focus:outline-none group-hover:text-white group-hover:bg-primary"
          />
          <TrashIcon fill={"#eb2d66"} />
        </div>
      </Item>
    </tr>
  );
}
