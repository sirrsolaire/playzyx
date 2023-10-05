import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  store: 1,
  platformName: "PC",
};

export const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    setStore: (state, action) => {
      state.store = action.payload;
    },
    setPlatformName: (state, action) => {
      state.platformName = action.payload;
    },
  },
});

export const { setStore, setPlatformName } = storeSlice.actions;
export default storeSlice.reducer;
