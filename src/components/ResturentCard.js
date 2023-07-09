import { IMG_URL } from "../utils/constants"
// import { AiOutlineStar } from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';

const ResturentCard=(props)=>{
    let {resData}=props
    console.log("resData",resData)
    const {name,area,cuisines,costForTwoMessage,avgRating,costForTwo,deliveryTime,cloudinaryImageId}=resData?.data
// console.log("cloudinaryImageId",cloudinaryImageId)
return <div className="m-4 flex flex-col justify-center 
 p-4 w-[300px] shadow-md rounded-lg bg-gray-100 hover:bg-gray-200" >
    <img className="w-[250px] rounded-md"
    src={IMG_URL+resData.data.cloudinaryImageId} />

     <h3 className="font-bold text-lg py-1">{name}</h3>
   
    <h3 style={{color:"gray"}}>{cuisines.join(", ")}</h3>
    <div className="flex items-center gap-2">
     <CiLocationOn/>
    <h3> location: {area}</h3>
    </div>
{/* <div className="flex items-center gap-2"
 style={{backgroundColor:"green",paddingRight:"5px",width:"80px"}}>

<h2>Rating</h2>
    <h3>{avgRating}</h3>
</div> */}
    {/* <h3>{costForTwo/100} FOR TWO</h3> */}
    {/* <h3> {"  "}₹{costForTwo/200}</h3>
     <h3>deliveryTime:{deliveryTime}</h3> */}

     <div className="flex gap-5">
     <div className="flex bg-green-500 rounded-sm" style={{width:"75px",padding:"2px"}}>
     <h2>Rating: </h2>
     {"  "} 
    <h3>{avgRating}</h3>
     </div>
     <h3> {"  "}₹{costForTwo/200}</h3>
  

     <h3>{deliveryTime}MINS</h3>
     </div>
</div>
}
export default ResturentCard