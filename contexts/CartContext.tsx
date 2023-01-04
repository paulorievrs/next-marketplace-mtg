import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { Card } from "../components/ProductCard/ProductCard";

export type CartItemType<T> = {
  quantitySelected: number;
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
    cards: []
  },
  setCart: () => {},
  addItemToCart: () => {}
};

const CartContext = createContext<CartContextType | null>(defaultState);

export const useCartContext = () => useContext(CartContext);

const setCartItem = (prev: CartType, item: Card) => {
  const cartItemIndex = prev.cards.findIndex((i) => i.id === item.id);
  const cartItem = prev.cards[cartItemIndex];
  const hasItem = cartItemIndex !== -1;

  if (hasItem) {
    if (cartItem.quantitySelected >= cartItem.quantity) return prev;

    prev.cards[cartItemIndex].quantitySelected += 1;
    return prev;
  }

  const newItem = {
    ...item,
    quantitySelected: 1
  };

  return {
    ...prev,
    cards: [...prev["cards"], newItem]
  };
};

const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartType>(defaultState.cart);

  function addItemToCart(item: Card) {
    setCart((prev) => setCartItem(prev, item));
    toast("🛒 Item adicionado ao carrinho!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light"
    });
  }

  return (
    <CartContext.Provider value={{ cart, setCart, addItemToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
