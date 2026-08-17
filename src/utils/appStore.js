import { configureStore } from "@reduxjs/toolkit";
import collapseSlice from "./collapseSlice"

const appStore = configureStore({

    reducer :{
        collapse : collapseSlice
    }

})

export default appStore