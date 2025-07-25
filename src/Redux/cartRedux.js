import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    total: 0,
    quantity: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1; //Cart quantity
      state.products.push(action.payload.product);
      state.total += action.payload.price * action.payload.quantity; // Product quantity
    },
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
