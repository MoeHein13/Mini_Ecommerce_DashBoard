import { useContext } from "react";
import { ProductContext } from "../Context/ProductContextType";

const useProduct = () => {
  const product = useContext(ProductContext);

  if (!product) {
    throw new Error("Error loading Product");
  }
  return product;
};

export default useProduct;
