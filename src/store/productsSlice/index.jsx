import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    add: (state, { payload }) => {
      state.push(...payload);
    },
  },
});

export default productsSlice.reducer;
