import { IMG_URL } from "../utils/constants"
const ResturentCard=(props)=>{
    let {resData}=props
    const {name,area,cuisines,avgRating,costForTwo,deliveryTime}=resData?.data

return <div className="card">
    <img style={{width:"100%"}} 
    src={IMG_URL+resData.data.cloudinaryImageId} />

     <h3>{name}</h3>
    <h3>location: {area}</h3>
    {/* <h3>{cuisines.join(", ")}</h3> */}

    <h3>{avgRating}</h3>
    <h3>{costForTwo/100} FOR TWO</h3>
     <h3>{deliveryTime}</h3>
</div>
}
export default ResturentCard