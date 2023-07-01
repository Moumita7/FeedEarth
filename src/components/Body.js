import { useEffect, useState } from "react"

import ResturentCard from "./ResturentCard"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"

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
    console.log(json)
//optional channing
    setResturentList(json?.data?.cards[2]?.data?.data?.cards)
    setFilterResturent(json?.data?.cards[2]?.data?.data?.cards)

}
if(restaurantList.length===0){
    return <Shimmer/>
}

    return <div className="body">
   
         <div className="cardBody" style={{padding:"10px"}}>
         <div className="filter" style={{display:"flex",gap:"10px"}}>
         <div className="search">
         <input value={searchVal} onChange={(e)=>setSearchVal(e.target.value)} type="text" className="search-box" />
         <button onClick={()=>{
            let filterData=restaurantList.filter((res)=>res.data.name.toLowerCase().includes(searchVal.toLowerCase()))
            console.log("fil",filterData)
            setFilterResturent(filterData)
         }}>search</button>

         </div>
         <button style={{padding:"2px"}} onClick={()=>{
                setResturentList(restaurantList.filter((res)=>res.data.avgRating>4))
            }}>Top Rated Resturents</button>
         </div>
         
         </div>
         <div className="resturentCard">
 
 {filterRestaurant.map((resturent)=>
 <Link key={resturent.data.id} to={"/resturent/"+resturent.data.id}>

 <ResturentCard  resData={resturent}/>
 </Link>
 )}
 
 
         </div>
     </div>
 }
 export default Body