import type { ReactNode } from "react";
import HomePage from "./Components/HomePage";
import RouterPlayground from "./Components/RouterPlayground";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./Pages/About";
import Contact from "./Pages/Contact";

const App = () => {
  return (
    // {/* <SearchBar /> */}
    <BrowserRouter>
      {/* <RouterPlayground /> */}
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
