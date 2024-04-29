import { configureStore } from "@reduxjs/toolkit";
import localizationReducer from "./localizationSlice";

export const store = configureStore({
  reducer: {
    localization: localizationReducer,
  },
});
