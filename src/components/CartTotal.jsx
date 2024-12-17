import React from "react";
import { useSelector } from "react-redux";

const CartTotal = () => {
  const cartItems = useSelector((state) => state.cartItems);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return (
    <div className="mt-4 p-4 text-white bg-gray-100 rounded-lg">
      <h2 className="text-xl font-semibold">جمع کل: {totalPrice} تومان</h2>
      {cartItems.length > 0 && (
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          onClick={() => alert("خرید نهایی شد")}
        >
          نهایی کردن خرید
        </button>
      )}
    </div>
  );
};

export default CartTotal;
