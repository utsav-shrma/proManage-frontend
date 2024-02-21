import { configureStore } from "@reduxjs/toolkit";
import utilityReducer from "./slice/utility"
const store = configureStore({
  reducer: {
    utility: utilityReducer,
  },
});

export default store;