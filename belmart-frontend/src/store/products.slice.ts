import { createSlice } from "@reduxjs/toolkit";

// interface ProductsState {
//   products: string[];
// }

const initialState = {
  products: [],
};
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      console.log(action.payload);
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
