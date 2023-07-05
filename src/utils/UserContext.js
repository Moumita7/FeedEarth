import { createContext } from "react";



let userContext=createContext({
    user:{
        name:"mou",
        email:"mou@gmail.com"
    }
})

export default userContext