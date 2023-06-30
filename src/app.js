


import React from "react"
import  ReactDOM  from "react-dom/client"
import "/app.css"
import Header from "./components/Header"
import Body from "./components/Body"








const AppLayout=()=>{
   return <div className="app">
<Header/>
<Body/>
    </div>
}




let root=ReactDOM.createRoot(document.getElementById("root"));


root.render(<AppLayout/>)

