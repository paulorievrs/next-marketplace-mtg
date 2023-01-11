import { createContext, useContext, useState } from 'react';
import { Card } from '../components/ProductCard/ProductCard';
import { triggerToast } from '../utils/toast';

export type CartItemType<T> = {
  quantitySelected: number;
  price: number;
} & T;

type CartType = {
  cards: CartItemType<Card>[];
};

type CartContextType = {
  cart: CartType;
  setCart: React.Dispatch<React.SetStateAction<CartType>>;
  addItemToCart: (item: Card) => void;
};

const defaultState: CartContextType = {
  cart: {
    cards: [],
  },
  setCart: () => null,
  addItemToCart: () => null,
};

const CartContext = createContext<CartContextType | null>(defaultState);

export const useCartContext = () => useContext(CartContext);

const setCartItem = (prev: CartType, item: Card) => {
  const cartItemIndex = prev.cards.findIndex((i) => i.id === item.id);
  const hasItem = cartItemIndex !== -1;

  if (hasItem) return updateCardQuantity(prev, item);

  const newItem = {
    ...item,
    quantitySelected: 1,
  };

  return {
    ...prev,
    cards: [...prev['cards'], newItem],
  };
};

export const updateCardQuantity = (
  prev: CartType,
  item: Card,
  quantity = 1,
  sum = true
) => {
  const cartItemIndex = prev.cards.findIndex((i) => i.id === item.id);
  const cartItem = prev.cards[cartItemIndex];
  if (
    cartItem.quantitySelected >= cartItem.quantity ||
    (!sum && quantity > cartItem.quantity)
  ) {
    triggerToast('🛒 Quantitdade indisponivel!');
    return prev;
  }

  if (!sum) {
    prev.cards[cartItemIndex].quantitySelected = quantity;
    triggerToast(`🛒 Alterado quantidade para ${quantity} com sucesso!`);
    return prev;
  }

  triggerToast('🛒 Adicinado 1 item com sucesso!');

  prev.cards[cartItemIndex].quantitySelected += quantity;
  return prev;
};

const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartType>(defaultState.cart);

  function addItemToCart(item: Card) {
    setCart((prev) => setCartItem(prev, item));
  }

  return (
    <CartContext.Provider value={{ cart, setCart, addItemToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
