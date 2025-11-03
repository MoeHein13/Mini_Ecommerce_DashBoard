import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <>
      <footer className="max-w-full bg-purple-500">
        <div className="grid  grid-cols-1 md:grid-cols-4 border-b-2 p-5 gap-4">
          <div className="mb-3">
            <h1 className="font-semibold text-gray-200 text-xl ">ShopHub</h1>
            <p>Your one-stop shop for premium products at great prices</p>
            <div className="flex items-center justify-start gap-2">
              <Facebook />
              <Instagram />
              <Twitter />
            </div>
          </div>
          <div className="mb-3">
            <h2 className=" font-medium  text-lg">QuickLinks</h2>
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
          <div className="">
            <h2 className=" font-medium  text-lg">Customer Service</h2>
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
          <div className="">
            <h2 className="font-medium text-lg">Newsletter</h2>
            <p>Subscribe to get special offers and updates</p>
            <div className="border-blue-300 border-1 rounded-md p-1 flex justify-between items-center mt-2">
              <input
                type="text"
                placeholder="Your email"
                className="border-none flex-1 outline-0"
              />
              <div className="bg-blue-300 p-2 rounded">
                <Mail color="#949ead" />
              </div>
            </div>
          </div>
        </div>
      </footer>
      Footer
    </>
  );
};

export default Footer;
