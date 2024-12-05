
import {createSlice} from '@reduxjs/toolkit';

const initialState={
    user:null,
    isAuhtenticated:false
}

const authSlice = createSlice({
    name:"authSlice",
    initialState,
    reducers:{
        userLoggedIn:(state,action)=>{
            state.user=action.payload.user;
            state.isAuhtenticated=true;
        },
        userLoggedOut:(state)=>{
            state.user=null;
            state.isAuhtenticated=false;
        }
    },
});
export const {userLoggedIn,userLoggedOut}=authSlice.actions;
export default authSlice.reducer;