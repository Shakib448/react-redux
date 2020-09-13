export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_CART = "REMOVE_CART";

export const addToCart = (id, name) => {
  return { type: ADD_TO_CART, id, name };
};

export const removeCart = (id) => {
  return { type: REMOVE_CART, id };
};
