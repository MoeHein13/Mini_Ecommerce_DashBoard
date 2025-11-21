import { ShoppingCart } from "lucide-react";
import type { productType } from "../types/productstype";
type productListType = {
  product: productType;
};

const ProductList = ({ product }: productListType) => {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow overflow-hidden group ">
      <div className="overflow-hidden relative aspect-square border-b-1 border-b-gray-200">
        <img
          src={product.image}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
        />
      </div>
      <div className="p-4 flex flex-col justify-between">
        <div>
          <h2 className="font-semibold text-lg">{product.name}</h2>
          <p className="text-sm text-gray-600">{product.description}</p>
        </div>
        <div className="mt-3 flex justify-between items-center">
          <p className="font-bold text-lg">${product.price}</p>
          <button className="cursor-pointer">
            <ShoppingCart color="#1639c5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
