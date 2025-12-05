import useProduct from "../Hooks/useProducts";
import type { ProductContextType } from "../Context/ProductContextType";
import ProductList from "./ProductList";
import type { productType } from "../types/productstype";
import { useState, type ChangeEvent, type MouseEvent } from "react";
import Navigation from "./Navigation";

const Products = () => {
  const { products, isLoading, error }: ProductContextType = useProduct();

  const [selectedCategory, setSelectedCategory] = useState("");

  const [searchProducts, setSearchProducts] = useState<string>("");

  const [hasCategory, setHasCategory] = useState<boolean>(false);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchProducts(e.target.value);
  };

  //Note
  const handleChangeFilter = (e: MouseEvent<HTMLButtonElement>) => {
    setHasCategory(true);
    setSelectedCategory(e.currentTarget.value);
  };
  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];
  //Featured Products

  const random2 = Math.floor(Math.random() * 10) + 1;

  const featureProducts = products.slice(0, random2);

  const baseProducts = hasCategory ? products : featureProducts;

  // First filter by search (across all categories)
  const searchedProducts = baseProducts.filter((product) =>
    product.name.toLowerCase().includes(searchProducts.toLowerCase())
  );

  console.log(featureProducts);
  // Then filter by category
  const selectedProducts =
    hasCategory && selectedCategory !== "All"
      ? searchedProducts.filter(
          (product) => product.category === selectedCategory
        )
      : searchedProducts;

  const renderedCategory = (
    <div className="space-y-5">
      <h1 className="font-semibold text-2xl">Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-5 sm:grid-cols-3">
        {categories.map((cat) => (
          <button
            key={cat}
            value={cat}
            onClick={handleChangeFilter}
            className=" bg-white text-gray-900 p-3 border-b-1 border-r-1 cursor-pointer hover:translate-y-1 translate-2 hover:font-semibold hover:shadow-xl hover:border-gray-600 hover:border-1"
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
    // <select
    //   className="max-w-xl text-center border-gray-400 border-2 rounded-md
    // "
    //   value={selectedCategory}
    //   onChange={handleChangeFilter}
    // >
    //   {categories.map((cat) => (
    //     <option value={cat} key={cat}>
    //       {cat}
    //     </option>
    //   ))}
    // </select>
  );

  const renderProducts = (
    <>
      {selectedProducts && selectedProducts.length > 0 ? (
        <div className="mt-5 space-y-5">
          <h2 className="text-2xl font-semibold ">
            {selectedCategory === "All" ? "All Products" : selectedCategory}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {selectedProducts.map((product: productType) => (
              <ProductList key={product.id} product={product} />
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg font-medium">
            No products found matching your search.
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Try a different search term or category.
          </p>
        </div>
      )}
    </>
  );
  return (
    <>
      <Navigation searchProducts={searchProducts} handleSearch={handleSearch} />
      <section className="py-6 bg-gray-200 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-2 p-5 ">
            {renderedCategory}
            {hasCategory === false && (
              <div className="mt-10">
                <h1 className="font-bold text-3xl text-center ">
                  Featured Products
                </h1>
                <p className="font-medium text-center">
                  Browse our curated selection of products
                </p>
              </div>
            )}
            {isLoading && (
              <p className="text-green-500 font-bold text-3xl">Loading.....</p>
            )}
            {error && <h1 className="text-red-500">Error fetching data</h1>}
            {renderProducts}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
