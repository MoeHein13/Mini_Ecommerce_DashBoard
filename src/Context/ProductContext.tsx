import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type Product = any;

const fetchproduct = () => {
  const { data, isLoading, error } = useQuery<Product[]>({
    queryKey: ["productData"],
    queryFn: async (): Promise<Product[]> => {
      const response = await axios.get("http://localhost:8000");
      return response.data;
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  return <div>{JSON.stringify(data)}</div>;
};

export default fetchproduct;
