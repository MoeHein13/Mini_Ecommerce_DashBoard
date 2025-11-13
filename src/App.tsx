import Footer from "./Components/Footer";
import Navigation from "./Components/Navigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProductContext from "./Context/ProductContext";
const queryClilent = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClilent}>
      <Navigation />
      {/* <SearchBar /> */}
      <ProductContext />
      <Footer />
    </QueryClientProvider>
  );
};

export default App;
