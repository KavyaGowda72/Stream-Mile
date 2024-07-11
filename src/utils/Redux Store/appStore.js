import { configureStore } from "@reduxjs/toolkit";
import sideBarReducer from '../Slices/sideBarSlice'

const appStore=configureStore({
    reducer:{
        sidebar:sideBarReducer,
    }
})


export default appStore