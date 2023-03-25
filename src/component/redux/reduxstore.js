import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./redux";
export default configureStore({
    reducer:{
        selva:counterReducer,
    }
})