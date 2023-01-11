import { CartItemType } from './../contexts/CartContext';

export function totalValues<T>(products?: CartItemType<T>[]) {
  if(!products) return 0;

  return products.reduce(
    (acc, card) => acc + card.price * card.quantitySelected,
    0
  )
}