import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movies",
    initialState:{
        movie:null,
    },
    reducers:{
        movieData:(state,action)=>{
            state.movie=action.payload
        }
    }
})


export default movieSlice.reducer
export const{movieData}=movieSlice.actions