import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count:0,
  showEditView:false,
  deletePopup:false,
  logoutPopup:false,
};

const utilitySlice = createSlice({
  name: "utility",
  initialState,
  reducers: {
    addCount: (state, action) => {
      state.count+=1;
    },
    setShowEditView: (state, action) => {
      state.showEditView=!state.showEditView;

    },
    setDeletePopup: (state, action) => {
      state.deletePopup=!state.deletePopup;
      
    },
    setLogutPopup: (state, action) => {
      state.logoutPopup=!state.logoutPopup;
      
    },
    // deleteTodo: (state, action) => {
    //   state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    // },
  },
});

export const { addCount ,setShowEditView,setDeletePopup,setLogutPopup} = utilitySlice.actions;

export default utilitySlice.reducer;