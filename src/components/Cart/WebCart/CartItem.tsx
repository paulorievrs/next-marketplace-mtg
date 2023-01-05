import Image from 'next/image'
import { ReactNode } from 'react'
import { CartItemType } from '../../../contexts/CartContext'
import { formatCurrencyBrl } from '../../../utils/format'
import TrashIcon from '../../icons/Trash'
import { Card } from '../../ProductCard/ProductCard'

type ItemProps = {
  children: ReactNode
}

const Item = ({ children }: ItemProps) => (
  <td className="border-slate-100 p-4 text-primary group-hover:text-white">
    {children}
  </td>
)

export default function CartItem({ card }: { card: CartItemType<Card> }) {
  return (
    <tr className="transition-all duration-300 ease cursor-pointer group border-b hover:bg-dark-primary hover:text-white">
      <Item>
        <div className="flex flex-row items-center gap-4">
          <Image src={card.image} alt="Card image" width={50} height={150} />
          {card.name}
        </div>
      </Item>

      <Item>{formatCurrencyBrl(card.price)}</Item>
      <Item>{formatCurrencyBrl(card.price * card.quantity)}</Item>
      <Item>
        <div className="flex flex-row items-center justify-center">
          <input
            id="quantity"
            placeholder="Qtd"
            min={1}
            max={card.quantity}
            value={card.quantitySelected}
            type={'number'}
            className="pl-1 text-primary h-8 border border-dark-primary outline-0 focus:outline-none group-hover:text-white group-hover:bg-primary"
          />
          <TrashIcon fill={'#eb2d66'} />
        </div>
      </Item>
    </tr>
  )
}
