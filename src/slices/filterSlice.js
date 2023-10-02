import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstSelect: "",
  platform: 4,
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
        }
    },
});

export const { setFirstSelect, setChildPlatform } = filterSlice.actions;
export default filterSlice.reducer;
