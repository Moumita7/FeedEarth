import { IMG_URL } from "../utils/constants";
import { AiFillDelete } from 'react-icons/Ai';
import { AiFillPlusCircle } from 'react-icons/Ai';
import { AiFillMinusCircle } from 'react-icons/Ai';
import { removeItem } from "../utils/cartSlice";
import { useDispatch, useSelector } from "react-redux";

// AiFillPlusCircle

const FoodItem = ({name,price,description,imageId,id
}) => {


  // console.log(id)
  const cartItem=useSelector(store=>store.cart.items)
  // console.log("cc",cartItem)

  const dispatch=useDispatch()

  const removeItemm=(id)=>{
    dispatch(removeItem(id))
  }
  return (
    <div className=" m-4 p-4 w-[300px] shadow-md 
    rounded-lg bg-gray-100 hover:bg-gray-200">
    <div className=" ">
    <div>

 

      <img
        className="w-[250px] rounded-md"
        src={IMG_URL + imageId
}/>
      <h3 className="font-bold text-lg py-2">{name}</h3>
 
      <h3>₹ {price/100}</h3>
      {/* <h3>{description}</h3> */}
      <div className="flex justify-between">
     
      <div className="flex justify-center gap-1 items-center" style={{marginLeft:"55px"}}>

      {/* <button className="px-3  bg-green-500 caret-white rounded-sm m-5">-</button> */}
      <AiFillMinusCircle />
    <p>3</p>
      {/* <button className="px-3  bg-green-500 caret-white rounded-sm m-5">+</button> */}
      <AiFillPlusCircle/>
      </div>
      <div onClick={()=>{
        removeItemm(id)
        // console.log(id)
      }} className="px-3 flex justify-center items-center"  style={{marginRight:"55px"}}>
    <AiFillDelete/>
      </div>
      </div>
    
</div>

    </div>

    </div>
  );
};
export default FoodItem;
