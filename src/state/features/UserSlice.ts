import { PayloadAction, createSlice } from '@reduxjs/toolkit';


export interface User {
  email:string;
  password:string;
  _id:string;
  name:string;
  level:number;
}

interface UserState {
  user:User | null;
}

const initialState:UserState = {
  user:null
}

export const UserSlice=createSlice({
  name:'user',
  initialState,
  reducers:{
    addUser:(state, action:PayloadAction<{user:User}>)=>{
      state.user = action.payload.user
    }
  }
})

export default UserSlice.reducer;
export const {addUser} = UserSlice.actions;