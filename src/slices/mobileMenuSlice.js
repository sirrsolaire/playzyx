import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  sideMenuOpen: false,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setOpen: (state, action) => {
      state.open = action.payload;
    },
    setSideMenuOpen: (state, action) => {
      state.sideMenuOpen = action.payload;
    },
  },
});

export const { setOpen, setSideMenuOpen } = menuSlice.actions;
export default menuSlice.reducer;
