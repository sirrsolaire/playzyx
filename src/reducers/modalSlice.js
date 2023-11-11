import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalOpen: false,
  modalType: "",
  searchModalOpen: false,
  addGameQuery: "",
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setIsModalOpen: (state, action) => {
      state.isModalOpen = action.payload;
    },
    setModalType: (state, action) => {
      state.modalType = action.payload;
    },
    setSearchModal: (state, action) => {
      state.searchModalOpen = action.payload;
    },
    setGameQuery: (state, action) => {
      state.addGameQuery = action.payload;
    },
  },
});

export const { setModalType, setIsModalOpen, setSearchModal, setGameQuery } =
  modalSlice.actions;
export default modalSlice.reducer;
