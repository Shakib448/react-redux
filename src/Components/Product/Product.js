import React from "react";

const Product = ({ product: { name, price, id }, addToCart }) => {
  return (
    <div style={{ border: "1px solid red" }}>
      <h1>Name : {name}</h1>
      <h2>price : {price}</h2>
      <button onClick={() => addToCart(id, name)}>Add to cart</button>
    </div>
  );
};

export default Product;
