import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Products from "./Products";
import PortfolioFooter from "./PortfolioFooter";

const Layout = () => (
  <>
    <header className="bg-white border-b-gray-200 border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <span className="font-bold text-xl">ShopHub Router Demo</span>
        <nav className="flex gap-4 text-sm font-medium">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
        </nav>
      </div>
    </header>
    <main className="min-h-screen bg-gray-50">
      <Outlet />
    </main>
  </>
);

const HomePage = () => (
  <>
    <Products />;
    <PortfolioFooter />
  </>
);

const AboutPage = () => (
  <section className="max-w-4xl mx-auto px-4 py-16 space-y-4">
    <h1 className="text-3xl font-semibold">About ShopHub</h1>
    <p className="text-gray-700">
      This demo shows how to wire basic routes using React Router. Navigate
      between Home, About, and Contact to practice route-based rendering.
    </p>
  </section>
);

const ContactPage = () => (
  <section className="max-w-4xl mx-auto px-4 py-16 space-y-4">
    <h1 className="text-3xl font-semibold">Contact Us</h1>
    <p className="text-gray-700">
      Drop a note to see how navigation works. Replace this with a real form or
      support info.
    </p>
    <div className="bg-white shadow-sm rounded-lg p-4 border border-gray-200 space-y-2">
      <div className="font-medium">Email</div>
      <div className="text-gray-700">support@shophub.dev</div>
      <div className="font-medium">Phone</div>
      <div className="text-gray-700">+1 (555) 123-4567</div>
    </div>
  </section>
);

const NotFoundPage = () => (
  <section className="max-w-4xl mx-auto px-4 py-16 space-y-4">
    <h1 className="text-3xl font-semibold">Page Not Found</h1>
    <p className="text-gray-700">Try one of the links in the header.</p>
  </section>
);

const RouterPlayground = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default RouterPlayground;
