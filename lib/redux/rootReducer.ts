/* Instruments */
import { cartSlice } from "./slices";
import { productSlice } from "./slices";

export const reducer = {
  cart: cartSlice.reducer,
  products: productSlice.reducer,
};
