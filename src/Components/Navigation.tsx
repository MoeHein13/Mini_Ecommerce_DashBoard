import { Search, ShoppingCart, Menu, X } from "lucide-react";
import { useState, type ChangeEvent } from "react";
import Cart from "./Cart";
import { useCart } from "../Hooks/useCart";

type searchType = {
  searchProducts: string;
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Navigation = ({ searchProducts, handleSearch }: searchType) => {
  const [menuDrop, setMenuDrop] = useState<boolean>(false);
  const [search, setSearch] = useState<boolean>(false);

  const [cartLogo, setCartLogo] = useState<boolean>(false);

  const { cart } = useCart();
  const itemCount = cart.reduce((accu, item) => (accu += item.qty), 0);

  const renderNav = (
    <nav className="flex flex-col gap-3 m-3 md:hidden">
      <span>Home</span>
      <span>About</span>
      <span>Contact</span>
    </nav>
  );

  const renderSearchBar = (
    <form className=" hidden md:inline  ">
      <input
        type="text"
        placeholder="Search products.."
        className="border-gray-500 border rounded-md  p-2 outline-0 "
        value={searchProducts}
        onChange={handleSearch}
      />
    </form>
  );

  const handleSearchIcon = () => {
    setSearch((prev) => !prev);
  };

  const handleMenuClick = () => {
    setMenuDrop((prev) => !prev);
  };

  const handleCartCilck = () => {
    setCartLogo((prev) => !prev);
  };

  return (
    <>
      <header className="bg-white border-b-gray-400 w-full  sticky top-0 z-50 ">
        <div className=" max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto ">
          <div className="flex items-center justify-between gap-5 font-medium h-16">
            <div className="flex-shrink-0">
              <h1 className="font-bold text-2xl">ShopHub</h1>
            </div>
            <nav className=" hidden md:flex space-x-3 ">
              <span>Home</span>
              <span>About</span>
              <span>Contact</span>
            </nav>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                {search && renderSearchBar}
                <Search
                  color="#000000"
                  strokeWidth={1.75}
                  className="hidden md:inline cursor-pointer"
                  onClick={handleSearchIcon}
                />
              </div>
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
              <div className="relative">
                <button className="cursor-pointer " onClick={handleCartCilck}>
                  <ShoppingCart color="#000000" />
                  {itemCount > 0 && (
                    <span className="rounded-full w-5 h-5 text-sm text-white bg-red-400 -top-3 -right-2 absolute flex justify-center items-center">
                      {itemCount}
                    </span>
                  )}
                </button>
                {cartLogo && (
                  <div className=" w-80 h-50 absolute right-0 z-50 mt-3 ">
                    <Cart />
                  </div>
                )}
              </div>
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
