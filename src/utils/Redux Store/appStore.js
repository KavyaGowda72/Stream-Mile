import { configureStore } from "@reduxjs/toolkit";
import sideBarReducer from '../Slices/sideBarSlice'
import popularReducer from '../Slices/popularVideos'

const appStore=configureStore({
    reducer:{
        sidebar:sideBarReducer,
        popular:popularReducer,
    }
})


export default appStore