const SearchBar = () => {
  return (
    <form className=" hidden md:inline  ">
      <input
        type="text"
        placeholder="Search products.."
        className="border-gray-500 border rounded-md  p-2 outline-0 "
      />
    </form>
  );
};

export default SearchBar;
