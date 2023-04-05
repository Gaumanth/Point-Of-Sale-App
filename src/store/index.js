import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
const initialState = {
  cartItems: [],
  show: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const id = action.payload.id;
      if (state.cartItems.length !== 0) {
        const checkId = state.cartItems.find((item) => item.id === id)
          ? true
          : false;
        // if item is present
        if (checkId) {
          const object = state.cartItems.find((item) => item.id === id);
          object.quantity++;
          object.total = object.price * object.quantity;
        }
        //If item is not present
        else {
          state.cartItems.push(action.payload);
        }
      } else {
        state.cartItems.push(action.payload);
      }
    },
    decrementQuantity(state, action) {
      const id = action.payload;
      const object = state.cartItems.find((item) => item.id === id);
      if (object.quantity != 1) {
        object.quantity--;
        object.total = object.price * object.quantity;
      }
    },
    incrementQuantity(state, action) {
      const id = action.payload;
      const object = state.cartItems.find((item) => item.id === id);
      object.quantity++;
      object.total = object.price * object.quantity;
    },
    emptyCart(state) {
      state.cartItems = [];
    },
    removeFromCart(state, action) {
      const id = action.payload;
      state.cartItems = [...state.cartItems.filter((item) => item.id !== id)];
    },
    showCart(state) {
      state.show = true;
    },
    hideCart(state) {
      state.show = false;
    },
  },
});

// const calculateTotalSlice = createSlice({

// });

const store = configureStore({
  reducer: cartSlice.reducer,
});

export const cartActions = cartSlice.actions;
export default store;
