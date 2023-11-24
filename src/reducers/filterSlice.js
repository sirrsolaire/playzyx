import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstSelect: "",
  platform: 4,
  tag: 31,
  filterByDate: "0",
};

export const filterSlice = createSlice({
  name: "filtering",
  initialState,
  reducers: {
    setFirstSelect: (state, action) => {
      state.firstSelect = action.payload;
    },
    setChildPlatform: (state, action) => {
      state.platform = Number(action.payload);
    },
    setTag: (state, action) => {
      state.tag = action.payload;
    },
    setFilterByDate: (state, action) => {
      state.filterByDate = action.payload;
    },
  },
});

export const { setFirstSelect, setChildPlatform, setTag, setFilterByDate } =
  filterSlice.actions;
export default filterSlice.reducer;
