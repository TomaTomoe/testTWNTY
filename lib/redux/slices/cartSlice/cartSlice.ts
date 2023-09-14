import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface Product {
  [key: string]: number;
}

export interface CartState {
  cartItems: Record<string, number>;
  cartTotalQuantity: number;
  cartTotalPrice: number;
  isOpen: boolean;
}

const initialState: CartState = {
  cartItems: {},
  cartTotalQuantity: 0,
  cartTotalPrice: 0,
  isOpen: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<string>) {
      const productName = action.payload;
      if (state.cartItems[productName] === undefined) {
        state.cartItems[productName] = 1;
        state.cartTotalQuantity += 1;
      }
    },
    increment(state, action: PayloadAction<string>) {
      const productName = action.payload;
      if (state.cartItems[productName] !== undefined) {
        state.cartItems[productName] += 1;
        state.cartTotalQuantity += 1;
      }
    },
    decrement(state, action: PayloadAction<string>) {
      const productName = action.payload;
      if (state.cartItems[productName] !== undefined) {
        state.cartItems[productName] -= 1;
        state.cartTotalQuantity -= 1;
      }
    },
    deleteProduct(state, action: PayloadAction<string>) {
      const productName = action.payload;
      if (state.cartItems[productName] !== undefined) {
        state.cartTotalQuantity =
          state.cartTotalQuantity - state.cartItems[productName];
        delete state.cartItems[productName];
      }
    },
    setTotalPriceState(state, action: PayloadAction<number>) {
      state.cartTotalPrice = action.payload;
    },
    toggleShoppingCart(state) {
      state.isOpen = !state.isOpen;
    },
  },
});
