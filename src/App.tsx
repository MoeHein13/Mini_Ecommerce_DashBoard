import type { ReactNode } from "react";
import HomePage from "./Components/HomePage";
import RouterPlayground from "./Components/RouterPlayground";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const AboutPage = () => {
  return (
    <section>
      <h1>About ShopHub</h1>
      <p>
        This demo is to show the React project for simple shopping cart
        application using React and Typescript
      </p>
    </section>
  );
};

const App = () => {
  return (
    // {/* <SearchBar /> */}
    <BrowserRouter>
      {/* <RouterPlayground /> */}
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
