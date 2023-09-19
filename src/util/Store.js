import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../slices/mobileMenuSlice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
  },
});
