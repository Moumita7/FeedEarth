// import { configureStore } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import userSlice from "./slices/userSlice";

// let store=configureStore({
// reducer:{
//     cart:cartSlice,
// },
// })
let store = configureStore({
  reducer: {
    cart: cartSlice,
    user:userSlice,
  },
});

export default store;
