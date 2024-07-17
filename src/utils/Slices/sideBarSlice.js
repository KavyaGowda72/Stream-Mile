import { createSlice } from "@reduxjs/toolkit";

const sideBarSlice= createSlice({
    name:"sidebar",
    initialState:{
        isMenuOpen:true,
       
    },
    reducers:{

        addSideBar:(state)=>{
            state.isMenuOpen = !state.isMenuOpen
        },
        menuClose:(state)=>{
            state.isMenuOpen=false
        },
       
    }
})

export const{addSideBar,menuClose}=sideBarSlice.actions
export default sideBarSlice.reducer