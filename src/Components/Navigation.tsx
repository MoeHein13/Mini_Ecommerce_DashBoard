import { Search, ShoppingCart } from "lucide-react";
const Navigation = () => {
  return (
    <>
      <div>
        <nav className="p-4 w-full bg-neutral-500 flex items-center justify-between gap-5 text-gray-200 font-medium ">
          <h1 className="font-bold text-2xl">ShopHub</h1>
          <div className="flex items-center gap-2">
            <span>Home</span>
            <span>Home</span>
            <span>Home</span>
            <span>Home</span>
          </div>
          <div className="flex items-center gap-3">
            <Search color="#e3dede" strokeWidth={1.75} />
            <ShoppingCart color="#b5a6a6" />
          </div>
        </nav>
        <div className="w-full bg-purple-400 ">
          <div className="max-h-dvh flex-col justify-center items-center gap-5">
            <h2 className="text-2xl font-semibold">
              Discover Amazing Products
            </h2>
            <div className="font-medium text-gray-200">
              Shop the latest trends and find everything you need in one place.
              Quality products at unbeateable prices
            </div>
            <button className="bg-white rounded px-4 py-2">Shop now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
