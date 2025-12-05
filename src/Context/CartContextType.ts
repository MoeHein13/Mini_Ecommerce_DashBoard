import { createContext } from "react";
import type { productType } from "../types/productstype";

export type CartContextType = {
  cart: (productType & { qty: number })[];
  addToCart: (product: productType) => void;
  removeCart: (id: number) => void;
  reduceItem: (id: number) => void;
  clearCart: () => void;
};

export const CartContext = createContext<CartContextType | null>(null);
