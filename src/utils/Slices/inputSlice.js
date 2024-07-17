import { createSlice } from "@reduxjs/toolkit";

const inputSlice=createSlice({
    name:"input",
    initialState:{
        
    },
    reducers:{
        cacheResults:(state,action)=>{
            
            state=Object.assign(state,action.payload)
        }
    }
})


export default inputSlice.reducer
export const{cacheResults}=inputSlice.actions