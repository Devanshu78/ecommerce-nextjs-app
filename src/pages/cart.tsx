import React from "react";
import { useCart } from "../state/cartStore";
import Cart from "../components/Cart";

const CartPage: React.FC = () => {
  const { cartItems } = useCart();
  //   const cartItems = state?.items || [];

  return (
    <div className="container mx-auto p-4 text-neutral-800 dark:text-neutral-200">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cartItems?.length === 0 ? (
        <p className="text-lg">Your cart is empty.</p>
      ) : (
        <Cart />
      )}
    </div>
  );
};

export default CartPage;
