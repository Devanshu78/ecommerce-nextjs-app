import React from "react";
import { useCart } from "../state/cartStore";
import { LucideIcon } from "lucide-react";

const Cart: React.FC = () => {
  const { cartItems, updateQuantity, removeItem, totalAmount } = useCart();

  return (
    <div className="container mx-auto p-4 dark:text-neutral-200">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center border-b pb-4"
              >
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover mr-4"
                  />
                  <div>
                    <h2 className="font-semibold">{item.title}</h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                    className="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-2 py-1 bg-gray-200 rounded dark:bg-gray-600 cursor-pointer"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="ml-4 text-red-500"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <h2 className="font-semibold">Total: ${totalAmount.toFixed(2)}</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
