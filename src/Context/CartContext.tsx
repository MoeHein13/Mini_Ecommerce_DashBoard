import { useState, type PropsWithChildren } from "react";
import { CartContext } from "./CartContextType";
import type { productType } from "../types/productstype";

type CartType = productType & { qty: number };
type CartChildType = PropsWithChildren;
const CartContextProvider = ({ children }: CartChildType) => {
  const [cart, setCart] = useState<CartType[]>([]);

  const addToCart = (product: productType) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        prev.map((item) =>
          item.id === product.id ? { ...product, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
