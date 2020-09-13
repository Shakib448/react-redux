import { ADD_TO_CART, REMOVE_CART } from "../actions/cartActions";

const initialState = {
  cart: [],
  products: [
    { name: "Lenovo Laptop", price: "10,000", id: 1 },
    { name: "Asus  Laptop", price: "10,000", id: 2 },
    { name: "Hp Laptop", price: "10,000", id: 3 },
    { name: "Samsung Laptop", price: "10,000", id: 4 },
    { name: "Toshiba Laptop", price: "10,000", id: 5 },
  ],
};

const cartReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newItem = {
        ProductId: action.id,
        name: action.name,
        cartId: state.cart.length + 1,
      };
      const newCart = [...state.cart, newItem];
      return { ...state, cart: newCart };

    case REMOVE_CART:
      const id = action.id;
      const remainingCart = state.cart.filter((item) => item.cartId !== id);
      return { ...state, cart: remainingCart };
    default:
      return state;
  }
};

export default cartReducers;
