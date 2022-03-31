import React from "react";

import CardProduct from "../CardProduct/CardProduct";

export default function ListProduct({ products }) {
  console.log(products)
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {products.map((product) => (
        <CardProduct product={product} key={product._id} />
      ))}
    </div>
  );
}