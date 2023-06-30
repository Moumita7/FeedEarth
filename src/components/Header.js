import { useState } from "react"
import { LOGO_URL } from "../utils/constants"

const Header=()=>{
    let [loginButton,setLoginButton]=useState("Login")
    return <div className="header">
        <div className="logo-container">
            <img className="img" src={LOGO_URL} alt="" />
        </div>
        <div className="navitems">
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>contact Us</li>
              <button onClick={()=>loginButton=="Login"? setLoginButton("Logout"):setLoginButton("Login")}>{loginButton}</button>
                
            </ul>
        </div>
    </div>
}

export default Header