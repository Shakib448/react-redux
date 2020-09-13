import { createStore } from "redux";
import cartReducers from "../reducers/reducers";

export const store = createStore(cartReducers);
