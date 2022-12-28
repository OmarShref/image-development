import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isEnglish: false,
};

const languageSlicer = createSlice({
  name: "language",
  initialState,
  reducers: {
    changeLanguage: (state, action) => {
      state.isEnglish = action.payload;
    },
  },
});

export const { changeLanguage } = languageSlicer.actions;
export default languageSlicer.reducer;
