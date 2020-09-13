import React from "react";
import { connect } from "react-redux";
import { removeCart } from "../../redux/actions/cartActions";

const Cart = ({ cart, removeCart }) => {
  return (
    <div>
      <h1>This is cart</h1>
      <ul>
        {cart.map((pd) => (
          <li style={{ listStyle: "none" }} key={pd.cartId}>
            {pd.name} <button onClick={() => removeCart(pd.cartId)}>x</button>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = {
  removeCart: removeCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
