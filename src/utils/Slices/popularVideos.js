import { createSlice } from "@reduxjs/toolkit";

const popularVideos=createSlice({
    name:"popular",
    initialState:{
        popularVideos:[],
       
       
    },
    reducers:{
        addPopularVideos:(state,action)=>{
            state.popularVideos=action.payload
        },
        
       
       
    }

})
export default popularVideos.reducer
export const{addPopularVideos}=popularVideos.actions