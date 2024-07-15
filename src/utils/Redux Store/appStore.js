import { configureStore } from "@reduxjs/toolkit";
import sideBarReducer from '../Slices/sideBarSlice'
import popularReducer from '../Slices/popularVideos'
import movieReducer from '../Slices/movieSlice'

const appStore=configureStore({
    reducer:{
        sidebar:sideBarReducer,
        popular:popularReducer,
        movies:movieReducer,
    }
})


export default appStore