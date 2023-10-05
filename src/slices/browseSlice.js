import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  store: 1,
  platformName: "PC",
  platform: 4,
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
    setBrowsePlatform: (state, action) => {
      state.platform = action.payload;
    },
  },
});

export const { setStore, setPlatformName, setBrowsePlatform } =
  storeSlice.actions;
export default storeSlice.reducer;
