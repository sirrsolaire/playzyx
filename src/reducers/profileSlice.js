import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: null,
  wishListArray: [],
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setWishList: (state, action) => {
      state.wishListArray = action.payload;
    },
  },
});

export const { setStatus, setWishList } = profileSlice.actions;
export default profileSlice.reducer;
