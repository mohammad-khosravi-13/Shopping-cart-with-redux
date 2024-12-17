import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  return (
    <div className="border  p-4 rounded shadow">
      <h3 className=" font-semibold">{product.name}</h3>
      <p className="text-white">قیمت: {product.price} تومان</p>
      <Link
        to="/cart"
        className="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        
      </Link>
    </div>
  );
};

export default ProductItem;
