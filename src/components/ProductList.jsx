import React, { useState } from "react";
import Product from "./Product";
import img1 from "../img/Screenshot_20241020_083307.jpg"
import img2 from "../img/51Czq-9Qg-L._AC_UL480_FMwebp_QL65_.webp"
import img3 from "../img/51nzGR0fugL._AC_UL480_FMwebp_QL65_.webp"
import img4 from "../img/51zoLDBO0wL._AC_UL480_FMwebp_QL65_.webp"
import img5 from "../img/61-07BXmUDL._AC_UL480_FMwebp_QL65_.webp"
import img6 from "../img/61gmSsxBpxL._AC_UL480_FMwebp_QL65_.webp"
import img7 from "../img/61gmSsxBpxL._AC_UL480_FMwebp_QL65_.webp"
import img8 from "../img/71-KctGUXuL._AC_UL480_FMwebp_QL65_.webp"
import img9 from "../img/71R2a9KW-QL._AC_UL480_FMwebp_QL65_.webp"
import img10 from "../img/71gOJobLUZL._AC_UL480_FMwebp_QL65_.webp"
import img11 from "../img/810fwNyO7qL._AC_UL480_QL65_.jpg"
import img12 from "../img/81MtOWmX4SL._AC_UL480_FMwebp_QL65_.webp"
import img13 from "../img/81qIK780N4L._AC_UL480_FMwebp_QL65_.webp"
import img14 from "../img/91ByXBjp3cL._AC_UL480_FMwebp_QL65_.webp"
import img15 from "../img/41Tl89KmYkL._AC_UL480_FMwebp_QL65_.webp"
import img16 from "../img/51Czq-9Qg-L._AC_UL480_FMwebp_QL65_.webp"
import img17 from "../img/71gOJobLUZL._AC_UL480_FMwebp_QL65_.webp"
const products = [
  {
    id: 1,
    name: "در ازای هر 1000 دلار خرید شما یک خدمتکار رایگان دریافت کنید ",
    price: 0,
    imageUrl: img1,
  },
  {
    id: 2,
    name: "Hey Dude Women's Wendy Linen | Women’s Shoes | Women’s Lace Up Loafers | Comfortable & Light-Weight",
    price: 500,
    imageUrl: img17,
  },
  {
    id: 3,
    name: "Hey Dude Women's Wendy Linen | Women’s Shoes | Women’s Lace Up Loafers | Comfortable & Light-Weight",
    price: 200,
    imageUrl: img2,
  },
  {
    id: 4,
    name: "Hey Dude Women's Wendy Linen | Women’s Shoes | Women’s Lace Up Loafers | Comfortable & Light-Weight",
    price: 300,
    imageUrl: img3,
  },
  {
    id: 5,
    name: "Hey Dude Women's Wendy Linen | Women’s Shoes | Women’s Lace Up Loafers | Comfortable & Light-Weight",
    price: 3000,
    imageUrl: img4,
  },
  {
    id: 6,
    name: "Hey Dude Women's Wendy Linen | Women’s Shoes | Women’s Lace Up Loafers | Comfortable & Light-Weight",
    price: 100,
    imageUrl: img5,
  },
  {
    id: 7,
    name: "Hey Dude Women's Wendy Linen | Women’s Shoes | Women’s Lace Up Loafers | Comfortable & Light-Weight",
    price: 50,
    imageUrl: img6,
  },
  {
    id: 8,
    name: "Hey Dude Women's Wendy Linen | Women’s Shoes | Women’s Lace Up Loafers | Comfortable & Light-Weight   ",
    price: 20,
    imageUrl: img7,
  },
  {
    id: 9,
    name: "Hey Dude Women's Wendy Linen | Women’s Shoes | Women’s Lace Up Loafers | Comfortable & Light-Weight",
    price: 200,
    imageUrl: img8,
  },
  {
    id: 10,
    name: "Hey Dude Women's Wendy Linen | Women’s Shoes | Women’s Lace Up Loafers | Comfortable & Light-Weight",
    price: 100,
    imageUrl: img9,
  },
  {
    id: 11,
    name: "Hey Dude Women's Wendy Linen | Women’s Shoes | Women’s Lace Up Loafers | Comfortable & Light-Weight",
    price: 150,
    imageUrl: img10,
  },
  {
    id: 12,
    name: "Hey Dude Women's Wendy Linen | Women’s Shoes | Women’s Lace Up Loafers | Comfortable & Light-Weight",
    price: 160,
    imageUrl: img11,
  },
  {
    id: 13,
    name: "Hey Dude Women's Wendy Linen | Women’s Shoes | Women’s Lace Up Loafers | Comfortable & Light-Weight",
    price: 2000,
    imageUrl: img12,
  },
  {
    id: 14,
    name: "Hey Dude Women's Wendy Linen | Women’s Shoes | Women’s Lace Up Loafers | Comfortable & Light-Weight",
    price: 1000,
    imageUrl: img13,
  },
  {
    id: 15,
    name: "Hey Dude Women's Wendy Linen | Women’s Shoes | Women’s Lace Up Loafers | Comfortable & Light-Weight",
    price: 200,
    imageUrl: img14,
  },
  {
    id: 16,
    name: "Hey Dude Women's Wendy Linen | Women’s Shoes | Women’s Lace Up Loafers | Comfortable & Light-Weight",
    price: 230,
    imageUrl: img15,
  },
  {
    id: 17,
    name: "Hey Dude Women's Wendy Linen | Women’s Shoes | Women’s Lace Up Loafers | Comfortable & Light-Weight",
    price: 100,
    imageUrl: img16,
  },
];

const ProductList = () => {
   const [quantities, setQuantities] = useState(
     Array.from({ length: products.length }, () => 0)
   );

  return (
    <div className=" flex flex-col gap-4 mb-8">
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          quantities={quantities}
          setQuantities={setQuantities}
        />
      ))}
    </div>
  );
};

export default ProductList;
