const Navigation = () => {
  return (
    <>
      <nav className="p-4 w-full bg-neutral-500 flex items-center justify-end gap-5 text-gray-200 font-medium mb-3">
        <span>Home</span>
        <span>Home</span>
        <span>Home</span>
        <span>Home</span>
        <span>Home</span>
        <div className="w-full bg-purple-400 ">
          <div className="max-h-dvh flex justify-center items-center gap-5">
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
      </nav>
    </>
  );
};

export default Navigation;
