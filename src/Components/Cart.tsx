import { useCart } from "../Hooks/useCart";
import { Plus, Minus } from "lucide-react";
const Cart = () => {
  const { cart, clearCart, removeCart, addToCart, reduceItem } = useCart();

  const itemCount = cart.reduce((accu, item) => (accu += item.qty), 0);

  const totalCost = cart
    .reduce((accu, item) => (accu += item.price * item.qty), 0)
    .toFixed(2);

  const renderCart = (
    <ul>
      {cart.map((item) => (
        <li
          key={item.id}
          className="border-b border-b-gray-300 flex items-center justify-between py-2"
        >
          <div>
            <p className="font-bold text-md">{item.name}</p>
            <p>
              {item.qty} x ${item.price} - ${(item.qty * item.price).toFixed(2)}
            </p>
          </div>

          <div className="flex flex-col justify-center">
            <div className="flex items-center justify-center gap-3">
              <button
                className="hover:underline text-sm  text-white cursor-pointer font-semibold border-0 bg-gray-400"
                onClick={() => reduceItem(item.id)}
              >
                <Minus size={18} />
              </button>
              <div className="">{item.qty}</div>
              <button
                className="hover:underline text-sm text-white cursor-pointer font-semibold border-0 bg-gray-400"
                onClick={() => addToCart(item)}
              >
                <Plus size={18} />
              </button>
            </div>
            <button
              className="text-sm text-red-400 cursor-pointer "
              onClick={() => removeCart(item.id)}
            >
              Remove
            </button>
          </div>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="border border-gray-400 rounded-md flex flex-col justify-center bg-white p-4 shadow-xl space-y-3">
      {itemCount > 0 ? (
        <div>
          {renderCart}
          <div className="flex justify-between">
            <div className="my-3 font-semibold">Total Price : </div>
            <div className="my-3 font-semibold">$ {totalCost}</div>
          </div>
          <button
            onClick={clearCart}
            className="text-center rounded-md bg-red-400 w-full mt-2 py-2"
          >
            Clear Cart
          </button>
        </div>
      ) : (
        <p className="text-center font-semibold text-md">Cart is empty</p>
      )}
    </div>
  );
};

export default Cart;
