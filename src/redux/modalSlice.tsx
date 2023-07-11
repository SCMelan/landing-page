import { createSlice } from "@reduxjs/toolkit";

export const toolkitModalSlice = createSlice({
  name: "modalSlice",
  initialState: { modalActive: false },
  reducers: {
    setModalActive(state) {
      state.modalActive = true;
    },
    setModalHide(state) {
      state.modalActive = false;
    },
  },
});

export default toolkitModalSlice.reducer;
export const { setModalActive, setModalHide } = toolkitModalSlice.actions;
