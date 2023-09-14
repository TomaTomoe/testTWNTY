import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export interface ProductData {
  quantity: number;
  price: number;
}

export interface ProductsState {
  items: Record<string, ProductData>;
}

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const response = await fetch("https://testtask.twnty.de/")
  const result = await response.json()
  return result
});

const initialState: ProductsState = {
  items: {},
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload
      })
  }
})
