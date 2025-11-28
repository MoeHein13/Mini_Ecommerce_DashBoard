import HomePage from "./Components/HomePage";
import RouterPlayground from "./Components/RouterPlayground";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      {/* <SearchBar /> */}
      {/* <RouterPlayground /> */}
      <HomePage />
    </BrowserRouter>
  );
};

export default App;
