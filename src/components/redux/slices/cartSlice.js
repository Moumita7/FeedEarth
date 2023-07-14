import { createSlice } from "@reduxjs/toolkit";


let cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[],
       cartTotalQuentity:0,
       cartTotalAmount:0,

    },
    reducers:{
        addItem:(state,action)=>{
            const isItems = state.items.findIndex((item) => item.id === action.payload.id);
    //         console.log("ok",isItems)
      if (isItems>=0) {
            state.items[isItems].quentity +=1;
           }else{
            const qntTotal={...action.payload,quentity:1}
            state.items.push(qntTotal)

           }
        },
        removeItem:(state,action)=>{
            // state.items.pop()

            const filterData=state.items.filter((ele)=>ele.id != action.payload.id)
            state.items=filterData;
     
            let total=state.items.reduce((ele, item) => (ele.price)/100 + item); 
            state.cartTotalAmount=total;

       
        },
        decriseItem:(state,action)=>{
            const itemIndex=state.items.findIndex(
                (item)=>item.id ==action.payload.id
            );
            if(state.items[itemIndex].quentity > 1){
                state.items[itemIndex].quentity -= 1
            }else if(state.items[itemIndex].quentity ==1){
                const nextCartItems=state.items.filter((item) => item.id !== action.payload.id)
                state.items=nextCartItems
                
            }

        },
        getTotal:(state)=>{
            var {total,quentity}=state.items.reduce(
                (cartTotal,cartItem)=>{
                    const {price,quentity}=cartItem
                    const itemTotal= (price/100) * quentity

                    cartTotal.total +=itemTotal;
                    cartTotal.quentity +=quentity;
                    return cartTotal
                },
                {
                    total:0,
                    quentity:0,
                }
                );
                state.cartTotalQuentity=quentity;
                state.cartTotalAmount=total;

        },
        clearCart:(state)=>{
            state.items=[]
        }
    }
})

export const {addItem,removeItem,clearCart,decriseItem,getTotal} = cartSlice.actions;
export default cartSlice.reducer