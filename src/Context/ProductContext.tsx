import axios from "axios";
import { type PropsWithChildren, type FC } from "react";
import { useQuery } from "@tanstack/react-query";
import type { productType } from "../types/productstype";
import { ProductContext, type ProductContextType } from "./ProductContextType";

type ProductProviderProps = PropsWithChildren;

const ProductContextProvider: FC<ProductProviderProps> = ({ children }) => {
  const fetchProducts = async (): Promise<productType[]> => {
    try {
      const response = await axios.get("http://localhost:5500/products");
      return response.data;
    } catch (err) {
      throw new Error(
        axios.isAxiosError(err)
          ? `Failed to fetch products: ${err.response?.status}`
          : "Error Fetching Data"
      );
    }
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const value: ProductContextType = {
    products: data,
    isLoading,
    error: error as Error | null,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
export default ProductContextProvider;
