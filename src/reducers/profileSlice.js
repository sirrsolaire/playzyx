import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: null,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { setStatus } = profileSlice.actions;
export default profileSlice.reducer;
