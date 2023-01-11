import clsx from 'clsx'
import { CartItemType } from '../../../contexts/CartContext'
import { Card } from '../../ProductCard/ProductCard'
import CartItem from './CartItem'

export default function MobileCart({
  cards = [],
}: {
  cards?: CartItemType<Card>[]
}) {
  return (
    <div className="block lg:hidden">
      <div
        className={clsx(
          `bg-white px-10 pt-5 pb-8 mt-10 flex flex-col gap-8 shadow`
        )}
      >
        {cards.map((card) => (
          <CartItem card={card} key={card.id} />
        ))}
      </div>
    </div>
  )
}
