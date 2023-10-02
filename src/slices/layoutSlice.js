import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  layout: "grid",
  postLayout: "grid",
};

export const layoutSlice = createSlice({
    name: "layout",
    initialState,
    reducers: {
        setLayout: (state, action) => {
            state.layout = action.payload;
        },
        setPostLayout: (state, action) => {
            state.postLayout = action.payload;
        },
    },
});

export const { setLayout, setPostLayout } = layoutSlice.actions;
export default layoutSlice.reducer;

