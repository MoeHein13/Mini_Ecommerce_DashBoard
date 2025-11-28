import { useContext } from "react";
import { CartContext } from "../Context/CartContextType";

export const useCart = () => {
  const cart = useContext(CartContext);
  if (!cart) throw new Error("Cart context is not availabe");
  return cart;
};
