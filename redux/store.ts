import { configureStore } from "@reduxjs/toolkit";
import UIStateReducer from "./uiSlice";
import CountryReducer from "./countrySlice";

export const store = configureStore({
  reducer: {
    ui_state: UIStateReducer, 
    country_state: CountryReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
