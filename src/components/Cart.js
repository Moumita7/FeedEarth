import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import store from '../utils/store'
import FoodItem from './FoodItem'
import { clearCart, removeItem } from '../utils/cartSlice'

const Cart = () => {
    const cartItem=useSelector(store=>store.cart.items)
    // console.log("cc",cartItem)
const dispatch=useDispatch()
    const handleRemoveItem=()=>{
    dispatch(clearCart())
    }

    const removeItemm=()=>{
      dispatch(removeItem())
    }

    let add =()=>{
      
    }
  return (
    <div className='flex'>
    {/* <button onClick={()=>handleRemoveItem()}  
               style={{ padding: "5px", margin:"2px",
                backgroundColor: "lightGreen"}}>clear cart</button> */}
       <div style={{flex:"4"}} className='flex flex-wrap'>
               

  
        {cartItem.map((item)=>{
           return <div key={item.card.info.id} className=''>
           <FoodItem {...item.card.info}/>
            </div>
        })}
    </div>
    <div style={{flex:"2"}}>
      {/* <h1>box</h1> */}
      <button onClick={()=>handleRemoveItem()}  
               style={{ padding: "5px", margin:"2px",
                backgroundColor: "lightGreen"}}>clear cart</button>
                <h2>total{add}</h2>

    </div>

    </div>
 
  )
}

export default Cart