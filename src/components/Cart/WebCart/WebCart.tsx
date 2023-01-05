import { CartItemType } from '../../../contexts/CartContext'
import { Card } from '../../ProductCard/ProductCard'
import CartItem from './CartItem'

type TableHeadItemProps = {
  item: string
}

const TableHeadItem = ({ item }: TableHeadItemProps) => (
  <th className="border-b border-b-primary text-left font-medium p-4 pr-8 pt-0 pb-3 text-primary whitespace-nowrap">
    {item}
  </th>
)

export default function WebCart({
  cards = [],
}: {
  cards?: CartItemType<Card>[]
}) {
  return (
    <div className="shadow-sm overflow-x-scroll mt-8 hidden lg:block">
      <table className="border-collapse table-auto w-full text-sm">
        <thead>
          <tr>
            <TableHeadItem item="Produto" />
            <TableHeadItem item="Valor Unit" />
            <TableHeadItem item="Valor Total" />
            <TableHeadItem item="Ações" />
          </tr>
        </thead>
        <tbody className="bg-white">
          {cards.map((card) => (
            <CartItem card={card} key={card.id} />
          ))}
        </tbody>
      </table>
    </div>
  )
}
