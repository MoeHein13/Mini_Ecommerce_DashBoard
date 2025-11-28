import { useCart } from "../Hooks/useCart";

const Cart = () => {
  const { cart, clearCart } = useCart();

  const renderCart = (
    <ul>
      {cart.map((item) => (
        <li key={item.id} className="border-b-2 flex items-center">
          <div className="flex flex-col justify-center">
            <span>{item.name}</span>
            <span>{item.price}</span>
          </div>
          <span>{item.qty}</span>
        </li>
      ))}
    </ul>
  );

  const totalCost = cart
    .reduce((accu, item) => (accu += item.price), 0)
    .toFixed(2);

  return (
    <div className="max-w-4xl border border-gray-400 rounded-md flex flex-col justify-center">
      {renderCart}
      <div>{totalCost}</div>
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
};

export default Cart;
