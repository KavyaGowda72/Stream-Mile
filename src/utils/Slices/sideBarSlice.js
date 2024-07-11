import { createSlice } from "@reduxjs/toolkit";

const sideBarSlice= createSlice({
    name:"sidebar",
    initialState:{
        isMenuOpen:true,
    },
    reducers:{

        addSideBar:(state)=>{
            state.isMenuOpen = !state.isMenuOpen
        }
    }
})

export const{addSideBar}=sideBarSlice.actions
export default sideBarSlice.reducer