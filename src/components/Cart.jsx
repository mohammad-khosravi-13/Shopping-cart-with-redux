import React from "react";
import { useSelector, useDispatch } from "react-redux";
const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems);

  const handleRemoveFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return (
    <div className="shadow-md rounded-lg text-white overflow-hidden">
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center p-4 border-b border-gray-200"
          >
            <div>
              <p className="font-semibold">{item.name}</p>
              <p className=" text-red-600">قیمت: {item.price} تومان</p>
              <p className=" text-red-600">تعداد: {item.quantity}</p>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => handleRemoveFromCart(item.id)}
                className="bg-red-500 text px-4 py-2 rounded-lg hover:bg-red-600"
              >
                حذف
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center p-4">سبد خرید خالی است</p>
      )}

      {cartItems.length > 0 && (
        <div className="mt-4 p-4 bg-gray-100 rounded-lg flex justify-between items-center">
          <h2 className="font-semibold text-black">
            جمع کل: {totalPrice} تومان
          </h2>
          <button
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            onClick={() => alert("خرید نهایی شد")}
          >
            نهایی کردن خرید
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
