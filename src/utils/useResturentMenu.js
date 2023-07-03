import { useState,useEffect } from "react"
import { MENU_API } from "../utils/constants"


const useResturentMenu=(resId)=>{
  let [resInfo,setResInfo]=useState(null)

  useEffect(()=>{
    fetchData()
  },[])

  let fetchData= async()=>{

    let data=await fetch(MENU_API+resId)
    let res=await data.json()
    setResInfo(res.data)
  }
  return resInfo

}
export default useResturentMenu