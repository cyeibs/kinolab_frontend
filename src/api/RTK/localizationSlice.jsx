import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  locale: localStorage.getItem("localization") || "ru-RU",
};

export const localizationSlice = createSlice({
  name: "localization",
  initialState,
  reducers: {
    setLocale: (state, action) => {
      state.locale = action.payload;
      localStorage.setItem("localization", action.payload);
    },
  },
});

export const { setLocale } = localizationSlice.actions;

export default localizationSlice.reducer;
