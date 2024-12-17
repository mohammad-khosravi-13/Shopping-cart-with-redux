import React from "react";
import { useDispatch } from "react-redux";

const Product = ({ product, quantities, setQuantities }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    if (quantities[product.id] > 0) {
      dispatch({
        type: "ADD_TO_CART",
        payload: { ...product, quantity: quantities[product.id] },
      });
      setQuantities((prev) => ({ ...prev, [product.id]: 0 }));
    }
  };

  const increaseQuantity = () => {
    setQuantities((prev) => ({ ...prev, [product.id]: prev[product.id] + 1 }));
  };

  const decreaseQuantity = () => {
    setQuantities((prev) => ({
      ...prev,
      [product.id]: Math.max(prev[product.id] - 1, 0),
    }));
  };

  return (
    <div>
      <div className=" backdrop-blur-2xl border-4 border-white   gap-3 text-black h-full w-12/12 h- flex  p-4 rounded-lg shadow-2xl">
        {product.imageUrl && (
          <div className=" flex justify-center bg-white rounded-md p-4">
            <img
              src={product.imageUrl}
              alt={product.name}
              className=" h-28 w-28 object-cover rounded-md"
            />
          </div>
        )}
        <div className=" w-full  flex justify-between items-center">
          <div>
            <h2 className=" font-semibold w-96 mt-3">{product.name}</h2>
          </div> 
          <div>
            <p className="text-red-500 bg-white w-36 p-2 text-center rounded-full text-sm font-bold mt-5">
              قیمت: {product.price} تومان
            </p>
          </div>
          <div className="  items-center mt-2 border-2 gap-7 text-black bg-white border-white rounded-full w-40 flex justify-center  ">
            <button
              onClick={decreaseQuantity}
              className=" bg-red-600 text-white  h-10 w-12 rounded-l-full px-1 text-center rounded-lg "
            >
              -
            </button>
            <span className="mx-2">{quantities[product.id]}</span>
            <button
              onClick={increaseQuantity}
              className=" h-10 w-12 rounded-r-full text-white bg-green-800  px-2 rounded-lg "
            >
              +
            </button>
          </div>

          <button
            onClick={handleAddToCart}
            className="mt-2 bg-green-800 text-white px-4 py-2 rounded-lg"
          >
            افزودن ب سبد 
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
