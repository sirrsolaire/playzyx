import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  browseType: "",
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
      state.platform = Number(action.payload);
    },
    setBrowserType: (state, action) => {
      state.browseType = action.payload;
    },
  },
});

export const { setStore, setPlatformName, setBrowsePlatform, setBrowserType } =
  storeSlice.actions;
export default storeSlice.reducer;
