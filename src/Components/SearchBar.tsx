const SearchBar = () => {
  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Search products.."
          className="border-2 rounded-md "
        />
        <input
          type="text"
          placeholder="Products Categories"
          className="border-2 rounded-md"
        />
        <select>
          <option>this one</option>
          <option>that one </option>
          <option>those ones</option>
        </select>
      </form>
    </>
  );
};

export default SearchBar;
