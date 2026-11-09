import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: []
  },
  reducers: {
    addItem: (state, action) => {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);

      if (!existingItem) {
        state.items.push({ ...product, quantity: 1 });
      }
    },
    increaseQuantity: (state, action) => {
      const item = state.items.find((product) => product.id === action.payload);
      if (item) item.quantity += 1;
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find((product) => product.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    }
  }
});

export const {
  addItem,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  clearCart
} = cartSlice.actions;

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer
  }
});

export default cartSlice.reducer;
