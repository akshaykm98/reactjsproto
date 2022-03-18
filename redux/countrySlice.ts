import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CountryState {
  value: string;
}

const initialState: CountryState = {
  value: "in",
};

export const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    changeCountry: (state, action: PayloadAction<string>) => {
      state.value == action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeCountry } = countrySlice.actions;

export default countrySlice.reducer;
