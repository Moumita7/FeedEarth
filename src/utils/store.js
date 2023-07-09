
// import { configureStore } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";


// let store=configureStore({
// reducer:{
//     cart:cartSlice,
// },
// })
let store=configureStore({
    reducer:{
        cart:cartSlice,
    },
})


export default store