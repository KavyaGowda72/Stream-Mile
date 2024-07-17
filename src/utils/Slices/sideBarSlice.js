import { createSlice } from "@reduxjs/toolkit";

const sideBarSlice= createSlice({
    name:"sidebar",
    initialState:{
        isMenuOpen:true,
        inputSuggestion:false,
    },
    reducers:{

        addSideBar:(state)=>{
            state.isMenuOpen = !state.isMenuOpen
        },
        menuClose:(state)=>{
            state.isMenuOpen=false
        },
        showSuggestion:(state)=>{
            state.inputSuggestion=!state.inputSuggestion
        }
    }
})

export const{addSideBar,menuClose,showSuggestion}=sideBarSlice.actions
export default sideBarSlice.reducer