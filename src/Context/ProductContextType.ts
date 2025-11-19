import { createContext } from "react";
import type { productType } from "../types/productstype";

export type ProductContextType = {
  products: productType[] | undefined;
  isLoading: boolean;
  error: Error | null;
};

export const ProductContext = createContext<ProductContextType | undefined>(
  undefined
);
