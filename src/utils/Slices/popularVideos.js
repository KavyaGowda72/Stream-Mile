import { createSlice } from "@reduxjs/toolkit";

const popularVideos=createSlice({
    name:"popular",
    initialState:{
        popularVideos:[],
        suggestedVideos:[]
       
       
    },
    reducers:{
        addPopularVideos:(state,action)=>{
            state.popularVideos=action.payload
        },
        sideContainer:(state,action)=>{
           state.suggestedVideos=action.payload
        }
        
       
       
    }

})
export default popularVideos.reducer
export const{addPopularVideos,sideContainer}=popularVideos.actions