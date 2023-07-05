import { useContext, useState } from "react"
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom"
import "/app.css"
import useOnlineStatus from "../utils/useOnlineStatus"
import userContext from "../utils/UserContext"

const Header=()=>{
    let [loginButton,setLoginButton]=useState("Login")
    let onlineStatus=useOnlineStatus()

    let {user}=useContext(userContext)

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
            <li>Online Status: {onlineStatus ? "🟢":"🔴"}</li>
                <Link to="/"><li>Home</li></Link>
                <Link to="/about"><li>About us</li></Link>
               <Link to="/contact"><li>contact Us</li></Link>
               <Link to="/grosary"><li>Grosary</li></Link>


              <button onClick={()=>loginButton=="Login"? setLoginButton("Logout"):setLoginButton("Login")}>{loginButton}</button>
                
            </ul>
        </div>
    </div>
}

export default Header