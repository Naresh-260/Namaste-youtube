import { createSlice } from "@reduxjs/toolkit";

const collapseSlice = createSlice({
    name : "collapse",
    initialState :{
        isMenuOpen : true
    },
    reducers :{

        openAndCloseMenu : (state)=>{
            state.isMenuOpen = !state.isMenuOpen
        },
        closeMenu: (state)=>{
            state.isMenuOpen = false
        }
        
    }
})

export const {openAndCloseMenu,closeMenu} = collapseSlice.actions

export default collapseSlice.reducer