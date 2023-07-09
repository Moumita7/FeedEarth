import { useContext, useEffect, useState } from "react"
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom"
// import "/app.css"
import useOnlineStatus from "../utils/useOnlineStatus"
import userContext from "../utils/UserContext"
import { useSelector } from "react-redux"

// import store from "../utils/store"

const Header=()=>{
    // let [loginButton,setLoginButton]=useState("Login")
    let onlineStatus=useOnlineStatus()

    let {user}=useContext(userContext)
    let cartSelector=useSelector(store=>store.cart.items)
    // console.log(cartSelector)





    return <div className="flex p-1 shadow-md justify-between h-auto border items-center bg-blue-50">

    {/* return <div className="flex p-1 shadow-md justify-between h-auto border items-center bg-blue-50 sm:bg-yellow-50 lg:bg-green-400"> */}
        <div className="">
        <Link to="/">
            <img className="w-16" src={LOGO_URL} alt="dd" />
            
            </Link>
        </div>
        {user.email}
        <div className=" ">
            <ul className="flex gap-4">
                <Link to="/"><li>Home</li></Link>
                <Link to="/about"><li>About us</li></Link>

             
                <Link to="/cart"><li>Cart {cartSelector.length}</li></Link>

                {/* <Link to="/login"><button className="px-3  bg-red-400 caret-white rounded-sm" onClick={()=>loginButton=="Login"? setLoginButton("Logout"):setLoginButton("Login")}>{loginButton}</button></Link> */}

                <Link to="/login"><button className="px-3  bg-red-400 caret-white rounded-sm" >login</button></Link>
               <Link to="/grosary"><li>Grosary</li></Link>
            <li>Online Status: {onlineStatus ? "🟢":"🔴"}</li>
                
            </ul>
        </div>
        {/* <Body filterRestaurant={filterRestaurant} setFilterResturent={setFilterResturent} restaurantList={restaurantList} setResturentList={setResturentList} searchVal={searchVal} setSearchVal={setSearchVal}/> */}
    </div>
}

export default Header