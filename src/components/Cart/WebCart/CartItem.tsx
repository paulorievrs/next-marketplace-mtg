import Image from 'next/image';
import { ReactNode, useRef } from 'react';
import {
  CartItemType,
  updateCardQuantity,
  useCartContext,
} from '../../../contexts/CartContext';
import { formatCurrencyBrl } from '../../../utils/format';
import Body from '../../Body/Body';
import TrashIcon from '../../icons/Trash';
import { Card } from '../../ProductCard/ProductCard';

type ItemProps = {
  children: ReactNode;
};

const Item = ({ children }: ItemProps) => (
  <td className="border-slate-100 p-4 text-primary group-hover:text-white">
    {children}
  </td>
);

export default function CartItem({ card }: { card: CartItemType<Card> }) {
  const cartContext = useCartContext();
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <tr className="transition-all duration-300 ease cursor-pointer group border-b hover:bg-dark-primary hover:text-white">
      <Item>
        <div className="flex flex-row items-center gap-4">
          <Image src={card.image} alt="Card image" width={50} height={150} />
          {card.name}
        </div>
      </Item>

      <Item>{formatCurrencyBrl(card.price)}</Item>
      <Item>
        {formatCurrencyBrl(
          card.price * parseInt(inputRef.current?.value || '1')
        )}
      </Item>
      <Item>
        <div className="flex flex-row items-center justify-center gap-4">
          <div className="flex flex-col gap-2">
            <input
              id="quantity"
              placeholder="Qtd"
              min={1}
              max={card.quantity}
              ref={inputRef}
              type={'number'}
              className="pl-1 text-primary h-8 border border-dark-primary outline-0 focus:outline-none group-hover:text-white group-hover:bg-primary"
            />
            <Body
              onClick={() =>
                cartContext?.setCart((prev) => {
                  const value = inputRef.current?.value
                    ? parseInt(inputRef.current?.value)
                    : 1;
                  const x = updateCardQuantity(prev, card, value, false);
                  console.log(x);
                  return x;
                })
              }
              fontSize="text-xs"
              className=" group-hover:text-white cursor-pointer"
            >
              Alterar
            </Body>
          </div>

          <TrashIcon fill={'#eb2d66'} />
        </div>
      </Item>
    </tr>
  );
}
