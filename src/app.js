


import React, { Suspense, lazy } from "react"
import  ReactDOM  from "react-dom/client"
import "/app.css"
import Header from "./components/Header"
import Body from "./components/Body"
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import About from "./components/About"
import Error from "./components/Error"
import ResturentMenu from "./components/ResturentMenu";
import Contact from "./components/Contact"
// import Grocery from "./components/Grocery"






let Grocery=lazy(()=>import("./components/Grocery"))



const AppLayout=()=>{
   return <div className="app">
<Header/>
{/* <Body/>
 */}
 <Outlet/>
    </div>
}

const appRouter=createBrowserRouter(
    [
        {
            path:"/",
            element:<AppLayout/>,
            children:[
                {
                    path:"/",
                    element:<Body/>
                },
                {
                    path:"/about",
                    element:<About/>
                }, 
                {
                    path:"/contact",
                    element:<Contact/>
                }, 
                {
                    path:"/grosary",
                    element:<Suspense fallback={<h1>Loadin.....</h1>}><Grocery/></Suspense>
                }, 
                {
                    path:"/resturent/:resId",
                    element:<ResturentMenu/>
                }
            ],
            errorElement:<Error/>
        },
        // {
        //     path:"/about",
        //     element:<About/>
        // }
    ]
)



let root=ReactDOM.createRoot(document.getElementById("root"));


root.render(<RouterProvider router={appRouter}/>)

