import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <>
      <footer className="max-w-full bg-purple-500">
        <div className="grid  grid-cols-1 md:grid-cols-4 border-b-2 p-5 gap-4">
          <div className="">
            <h1 className="font-semibold text-gray-200 text-xl ">ShopHub</h1>
            <p>Your one-stop shop for premium products at great prices</p>
            <div className="flex items-center justify-start gap-2">
              <Facebook />
              <Instagram />
              <Twitter />
            </div>
          </div>
          <div>
            <h2 className=" font-medium  text-lg">QuickLinks</h2>
            <div className="flex flex-col ">
              <span>About us</span>
              <span>Shop</span>
              <span>Blog</span>
              <span>Contact</span>
            </div>
          </div>
          <div>
            <h2 className=" font-medium  text-lg">Customer Service</h2>
            <div className="flex flex-col ">
              <span>Shipping Info</span>
              <span>Returns</span>
              <span>FAQ</span>
              <span>Track Order</span>
            </div>
          </div>
          <div>
            <h2 className="font-medium text-lg">Newsletter</h2>
            <p>Subscribe to get special offers and updates</p>
          </div>
        </div>
      </footer>
      Footer
    </>
  );
};

export default Footer;
