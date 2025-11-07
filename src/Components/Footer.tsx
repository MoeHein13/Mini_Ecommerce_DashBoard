import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <>
      <footer className="max-w-full bg-gray-900">
        <div className="grid  grid-cols-1 md:grid-cols-4 border-b-2 p-5 gap-3 text-gray-400 border border-gray-400">
          <div className="space-y-2">
            <h1 className="font-semibold text-white text-xl ">ShopHub</h1>
            <p>Your one-stop shop for premium products at great prices</p>
            <div className="flex items-center justify-start space-x-1.5">
              <Facebook />
              <Instagram />
              <Twitter />
            </div>
          </div>
          <div className="space-y-2">
            <h2 className=" font-semibold text-xl text-white">QuickLinks</h2>
            <div className="flex flex-col ">
              <span className="hover:cursor-pointer hover:font-semibold">
                About Us
              </span>
              <span className="hover:cursor-pointer hover:font-semibold">
                Shop
              </span>
              <span className="hover:cursor-pointer hover:font-semibold">
                Blog
              </span>
              <span className="hover:cursor-pointer hover:font-semibold">
                Contact
              </span>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className=" font-semibold text-xl text-white">
              Customer Service
            </h2>
            <div className="flex flex-col ">
              <span className="hover:cursor-pointer hover:font-semibold">
                Shipping Info
              </span>
              <span className="hover:cursor-pointer hover:font-semibold">
                Returns
              </span>
              <span className="hover:cursor-pointer hover:font-semibold">
                FAQ
              </span>
              <span className="hover:cursor-pointer hover:font-semibold">
                Track Order
              </span>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="font-semibold text-xl text-white">Newsletter</h2>
            <p>Subscribe to get special offers and updates</p>
            <div className="flex">
              <input
                type="text"
                placeholder="Your email"
                className=" border border-gray-700  flex-1 focus:border-blue-400 focus:outline-none px-1 py-2 rounded-l-lg "
              />
              <button className="bg-blue-600 px-1 rounded-r-lg py-2 hover:bg-blue-800 hover:cursor-pointer transition-colors duration-70">
                <Mail color="#949ead" />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
