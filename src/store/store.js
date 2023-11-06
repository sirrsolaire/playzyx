import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../reducers/mobileMenuSlice.js";
import filterReducer from "../reducers/filterSlice.js";
import queryReducer from "../reducers/querySlice.js";
import layoutReducer from "../reducers/layoutSlice.js";
import monthReducer from "../reducers/calendarSlice.js";
import storeReducer from "../reducers/browseSlice.js";
import modalReducer from "../reducers/modalSlice.js";
import authReducer from "../reducers/authSlice.js";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    filtering: filterReducer,
    query: queryReducer,
    layout: layoutReducer,
    month: monthReducer,
    store: storeReducer,
    modal: modalReducer,
    auth: authReducer,
  },
});
