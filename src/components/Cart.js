import React from "react";
import { useDispatch, useSelector } from "react-redux";
import store from "./redux/store";
import FoodItem from "./FoodItem";
import { clearCart, removeItem } from "./redux/slices/cartSlice";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);
  // console.log("cc",cartItem)
  // const dispatch = useDispatch();

  // const removeItemm = () => {
  //   dispatch(removeItem());
  // };

  let add = () => {};
  return (
    <div>
        {/* <h1>your cart is empty</h1> */}
      {cartItem.length == 0 ? (
        <div className="flex h-[100vh] justify-center items-center">
       <img className="w-[400px]" src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-5521508-4610092.png" alt="" />
       </div>
      ) : (
        <div className="flex">
          {/* <button onClick={()=>handleRemoveItem()}  
               style={{ padding: "5px", margin:"2px",
                backgroundColor: "lightGreen"}}>clear cart</button> */}
          <div style={{ flex: "4" }} className="flex flex-wrap">
            {/* cart item */}
            <FoodItem />
          </div>
          {/* <div style={{ flex: "2" }}>

        <button
          onClick={() => handleRemoveItem()}
          style={{
            padding: "5px",
            margin: "2px",
            backgroundColor: "lightGreen",
          }}
        >
          clear cart
        </button>

      </div> */}
        </div>
      )}
    </div>
  );
};

export default Cart;

// {cartItem.map((item) => {
//   return (

//     <div>
//     {/* <div key={item.card.info.id} className=""> */}
//       {/* <FoodItem {...item.card.info} /> */}
//       <FoodItem  />

//       {/* <FoodItem itemm={...item.card.info} /> */}

// {/* fef */}
//     </div>
//   );
// })}
