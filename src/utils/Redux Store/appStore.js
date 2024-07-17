import { configureStore } from "@reduxjs/toolkit";
import sideBarReducer from '../Slices/sideBarSlice'
import popularReducer from '../Slices/popularVideos'
import movieReducer from '../Slices/movieSlice'
import inputReducer from '../Slices/inputSlice'

const appStore=configureStore({
    reducer:{
        sidebar:sideBarReducer,
        popular:popularReducer,
        movies:movieReducer,
        input:inputReducer,
    }
})


export default appStore