import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
import Product from "../Product/Product";

const Shop = ({ products, addToCart }) => {
  // This is come form react store
  return (
    <div>
      <h1>This is shop</h1>
      {products.map((product) => (
        <Product key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = {
  addToCart: addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
