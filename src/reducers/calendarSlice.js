import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  monthNo: "10",
};

export const monthSlice = createSlice({
  name: "month",
  initialState,
  reducers: {
    setMonth: (state, action) => {
      state.monthNo = action.payload;
    },
  },
});

export const { setMonth } = monthSlice.actions;
export default monthSlice.reducer;
