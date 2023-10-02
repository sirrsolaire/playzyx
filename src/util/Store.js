import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../slices/mobileMenuSlice";
import filterReducer from "../slices/filterSlice.js";
import queryReducer from "../slices/querySlice.js";
import layoutReducer from "../slices/layoutSlice.js";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    filtering: filterReducer,
    query: queryReducer,
    layout: layoutReducer,
  },
});
