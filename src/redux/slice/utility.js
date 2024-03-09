import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count:0,
  logoutPopup:false,
  reloadGlobalState:false,
};

const utilitySlice = createSlice({
  name: "utility",
  initialState,
  reducers: {
    addCount: (state, action) => {
      state.count+=1;
    },
    setLogutPopup: (state, action) => {
      state.logoutPopup=!state.logoutPopup;
      
    },
    setReloadGlobalState: (state, action) => {
      state.reloadGlobalState=!state.reloadGlobalState;
      
    },
    // deleteTodo: (state, action) => {
    //   state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    // },
  },
});

export const { addCount ,setLogutPopup,setReloadGlobalState} = utilitySlice.actions;

export default utilitySlice.reducer;