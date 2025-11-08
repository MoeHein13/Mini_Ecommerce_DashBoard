import Footer from "./Components/Footer";
import Navigation from "./Components/Navigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClilent = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClilent}>
      <Navigation />
      {/* <SearchBar /> */}
      <Footer />
    </QueryClientProvider>
  );
};

export default App;
