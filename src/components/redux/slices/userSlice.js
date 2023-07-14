import { createSlice } from "@reduxjs/toolkit"



const initialState={
    userData:[
    //     {
    //     id: 1,
    //     name: "Moumita",
    //     email: "mou@gmail.com",
    //     password: "mou1234",
    //     confirm_password: "mou1234",
    // }
], 
    isUserLogin:false,
}

const usersSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        addUser:(state,action)=>{
            state.userData.push(action.payload)
        },
        isLogin:(state)=>{
            state.isUserLogin=true
        },
        logoutUser:(state)=>{
            state.userData=[]
        }
    }
})

export const {addUser,isLogin,logoutUser} =usersSlice.actions;
export default usersSlice.reducer;