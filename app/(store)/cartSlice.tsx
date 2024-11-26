import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: string | number; // Assuming 'id' can be a string or number
  name: string;
  price: number;
  // Add any other properties for cart items here
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [], // Array to store cart items
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      // Add the new item to the cart
      state.items.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<string | number>) => {
      // Remove an item by its ID
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      // Clear the cart
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
