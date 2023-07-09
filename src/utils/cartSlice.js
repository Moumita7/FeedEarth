import { createSlice } from "@reduxjs/toolkit";


let cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[],
       
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload)
        },
        removeItem:(state,action)=>{
            state.items.pop()
        //  let newd= state.items.filter((ele) => ele.id !== action.payload.id);
        //  state.items=newd
            // return {
                // ...state,
                // state.items.push (newItems)
            // }
        },
        clearCart:(state)=>{
            state.items=[]
        }
    }
})

export const {addItem,removeItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer