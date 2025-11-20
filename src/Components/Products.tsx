import React from "react";
import useProduct from "../Hooks/useProducts";
import type { ProductContextType } from "../Context/ProductContextType";
import ProductList from "./ProductList";
import type { productType } from "../types/productstype";
const Products = () => {
  const { products, isLoading, error }: ProductContextType = useProduct();

  const renderProducts = (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products?.map((product: productType) => (
        <ProductList key={product.id} product={product} />
      ))}
    </div>
  );
  return (
    <section className="py-16 bg-gray-200 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 p-5">
          <h1 className="font-bold text-3xl text-center ">Featured Products</h1>
          <p className="font-medium">
            Browse our curated selection of products
          </p>
          {isLoading && (
            <p className="text-green-500 font-bold text-3xl">Loading.....</p>
          )}
          {renderProducts}
        </div>
      </div>
    </section>
  );
};

export default Products;
