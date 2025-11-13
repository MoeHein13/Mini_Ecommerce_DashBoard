import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { productType } from "../types/productstype";

const fetchproduct = () => {
  const { data, isLoading, error } = useQuery<productType[]>({
    queryKey: ["productData"],
    queryFn: async (): Promise<productType[]> => {
      const response = await axios.get("http://localhost:8000");
      const data = response.data;
      return data;
    },
  });

  return (
    <div>
      <ul>
        {data?.map((product: productType) => (
          <li key={product.id}>{product.category}</li>
        ))}
      </ul>
    </div>
  );
};

export default fetchproduct;
