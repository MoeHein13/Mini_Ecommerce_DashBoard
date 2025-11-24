import useProduct from "../Hooks/useProducts";
import type { ProductContextType } from "../Context/ProductContextType";
import ProductList from "./ProductList";
import type { productType } from "../types/productstype";
import { useState, type ChangeEvent } from "react";

const Products = () => {
  const { products, isLoading, error }: ProductContextType = useProduct();

  const [selectedCategory, setSelectedCategory] = useState("All");

  // const categories = [
  //   "All",
  //   ...(Array.from(
  //     new Set(
  //       (products ?? []).map((product) => product.category).filter(Boolean)
  //     )
  //   ) as string[]),
  // ];
  const categories = [
    "All",
    ...new Set((products ?? []).map((product) => product.category)),
  ];

  const selectedProducts =
    selectedCategory === "All"
      ? products
      : products?.filter((product) => product.category === selectedCategory);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };
  const renderedCategory = (
    <select
      className="max-w-xl text-center border-gray-400 border-2 rounded-md 
    "
      value={selectedCategory}
      onChange={handleChange}
    >
      {categories.map((cat) => (
        <option value={cat} key={cat}>
          {cat}
        </option>
      ))}
    </select>
  );

  const renderProducts = (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {selectedProducts?.map((product: productType) => (
        <ProductList key={product.id} product={product} />
      ))}
    </div>
  );
  return (
    <section className="py-16 bg-gray-200 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 p-5 items-center">
          <div>{renderedCategory}</div>
          <h1 className="font-bold text-3xl text-center ">Featured Products</h1>
          <p className="font-medium text-center">
            Browse our curated selection of products
          </p>
          {isLoading && (
            <p className="text-green-500 font-bold text-3xl">Loading.....</p>
          )}
          {error && <h1 className="text-red-500">Error fetching data</h1>}
          {renderProducts}
        </div>
      </div>
    </section>
  );
};

export default Products;
