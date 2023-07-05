import { useEffect, useState } from "react"

import ResturentCard from "./ResturentCard"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"

const Body=()=>{
    let [restaurantList,setResturentList]=useState([])
    let [filterRestaurant,setFilterResturent]=useState([])

let [searchVal,setSearchVal]=useState("")

console.log("body render")
    useEffect(()=>{
        // console.log("useEffect called")
        fetchData()
    },[])

let fetchData=async()=>{
    let data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")
    let json=await data.json()
    // console.log(json)
//optional channing
    setResturentList(json?.data?.cards[2]?.data?.data?.cards)
    setFilterResturent(json?.data?.cards[2]?.data?.data?.cards)

}

//checking online status
const onlineStatus=useOnlineStatus()
// console.log("online",onlineStatus)
if(onlineStatus===false) return <h1>looks like your inter is gone check your internet connection</h1>


// if(restaurantList.length===0){
if(restaurantList===[]){

    return <Shimmer/>
}

    return <div className="body">
   
         <div className="cardBody" >
         <div className="flex border items-center justify-center">
         <div className="flex justify-center m-2" >
         <input value={searchVal}
          onChange={(e)=>setSearchVal(e.target.value)} type="text" className="border border-solid border-black" />
         <button className="px-3  bg-red-500 caret-white rounded-sm"  onClick={()=>{
            let filterData=restaurantList.filter((res)=>res.data.name.toLowerCase().includes(searchVal.toLowerCase()))
            console.log("fil",filterData)
            setFilterResturent(filterData)
         }}>search</button>

         </div>
         <div>
         <button className="px-3  bg-red-500 caret-white rounded-sm"  onClick={()=>{
               setFilterResturent(restaurantList.filter((res)=>res.data.avgRating>4))
            }}>Top Rated Resturents</button>
         </div>
        
         </div>
         
         </div>
         <div className="flex flex-wrap justify-center">
 
 {filterRestaurant.map((resturent)=>
 <Link key={resturent.data.id} to={"/resturent/"+resturent.data.id}>

 <ResturentCard  resData={resturent}/>
 </Link>
 )}
 
 
         </div>
     </div>
 }
 export default Body