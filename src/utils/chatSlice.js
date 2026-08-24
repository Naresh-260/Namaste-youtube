import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name : "chat",

    initialState : [],
    reducers : {
       addLiveChat: (state, action) => {
            state.push(action.payload);

            if (state.length > 10) {
                state.splice(0, 1);
            }
            },
        removeChat:(state) =>{
            return []
        }
    }

})

export const {addLiveChat,removeChat} = chatSlice.actions

export default chatSlice.reducer