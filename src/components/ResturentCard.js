import { IMG_URL } from "../utils/constants"
const ResturentCard=(props)=>{
    let {resData}=props
    const {name,area,cuisines,avgRating,costForTwo,deliveryTime}=resData?.data

return <div className="m-4 p-4 w-[250px] shadow-md rounded-lg bg-gray-100 hover:bg-gray-200" >
    <img className="w-25 rounded-md"
    src={IMG_URL+resData.data.cloudinaryImageId} />

     <h3 className="font-bold text-lg py-2">{name}</h3>
    <h3>location: {area}</h3>
    {/* <h3>{cuisines.join(", ")}</h3> */}

    <h3>{avgRating}</h3>
    <h3>{costForTwo/100} FOR TWO</h3>
     <h3>{deliveryTime}</h3>
</div>
}
export default ResturentCard