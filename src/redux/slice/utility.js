import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count:0,
};

const utilitySlice = createSlice({
  name: "utility",
  initialState,
  reducers: {
    addCount: (state, action) => {
      state.count+=1;
    },
    // deleteTodo: (state, action) => {
    //   state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    // },
  },
});

export const { addCount } = utilitySlice.actions;

export default utilitySlice.reducer;