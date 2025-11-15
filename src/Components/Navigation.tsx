import { Search, ShoppingCart, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import type { productType } from "../types/productstype";
import axios from "axios";
const Navigation = () => {
  const [menuDrop, setMenuDrop] = useState<boolean>(false);

  const [products, setProducts] = useState<productType[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:8000`);
        const data = await response.data;

        setProducts(data);
      } catch (error) {
        alert(error);
      }
    };
    fetchProducts();
  }, []);

  const renderNav = (
    <nav className="flex flex-col gap-3 m-3 md:hidden">
      <span>Home</span>
      <span>Shop</span>
      <span>About</span>
      <span>Contact</span>
    </nav>
  );

  const handleMenuClick = () => {
    setMenuDrop((prev) => !prev);
  };
  return (
    <>
      <header className="bg-white border-b-gray-400 w-full  ">
        <div className=" max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto ">
          <div className="flex items-center justify-between gap-5 font-medium h-16">
            <div className="flex-shrink-0">
              <h1 className="font-bold text-2xl">ShopHub</h1>
            </div>
            <nav className=" hidden md:flex space-x-3 ">
              <span>Home</span>
              <span>Shop</span>
              <span>About</span>
              <span>Contact</span>
            </nav>
            <div className="flex items-center gap-3">
              <Search
                color="#000000"
                strokeWidth={1.75}
                className="hidden md:inline"
              />
              {menuDrop ? (
                <X
                  className={`md:hidden hover:cursor-pointer`}
                  onClick={handleMenuClick}
                />
              ) : (
                <Menu
                  className="md:hidden hover:cursor-pointer"
                  onClick={handleMenuClick}
                />
              )}
              <ShoppingCart color="#000000" />
            </div>
          </div>
        </div>
        {menuDrop && renderNav}
      </header>
      <section className="w-full bg-purple-400  p-6">
        <div className="text-center flex-col justify-center items-center ">
          <h2 className="text-2xl font-semibold">Discover Amazing Products</h2>
          <div className="font-medium text-gray-200">
            Shop the latest trends and find everything you need in one place.
            Quality products at unbeateable prices
          </div>
          <button className="bg-white rounded px-4 py-2 mt-4 cursor-pointer  hover:font-semibold transition-colors duration-100">
            Shop now
          </button>
        </div>
      </section>
    </>
  );
};

export default Navigation;
