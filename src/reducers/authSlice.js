import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
  registerFullName: "",
  registerUsername: "",
  registerEmail: "",
  registerPassword: "",
  invalid: false,
  showContent: false,
  isReviewed: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setRegisterUsername: (state, action) => {
      state.registerUsername = action.payload;
    },
    setRegisterEmail: (state, action) => {
      state.registerEmail = action.payload;
    },
    setRegisterPassword: (state, action) => {
      state.registerPassword = action.payload;
    },
    setRegisterFullName: (state, action) => {
      state.registerFullName = action.payload;
    },
    setLoginInvalid: (state, action) => {
      state.invalid = action.payload;
    },
    setShowContent: (state, action) => {
      state.showContent = action.payload;
    },
    setIsReviewed: (state, action) => {
      state.isReviewed = action.payload;
    },
  },
});

export const {
  setUsername,
  setPassword,
  setRegisterUsername,
  setRegisterEmail,
  setRegisterPassword,
  setLoginInvalid,
  setShowContent,
  setRegisterFullName,
  setIsReviewed,
} = authSlice.actions;
export default authSlice.reducer;
