import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchproduct = () => {
  const [products, setProducts] = useState("");

  const { data, isPending, error } = useQuery({
    queryKey: ["productData"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:8000");
      const data = response.data;
      return data;
    },
  });

  return <div></div>;
};

export default fetchproduct;
