import { configureStore } from "@reduxjs/toolkit";
import collapseSlice from "./collapseSlice"
import chatSlice from "./chatSlice"

const appStore = configureStore({
    reducer :{
        collapse : collapseSlice,
        chat : chatSlice
    }

})

export default appStore