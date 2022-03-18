import { createSlice } from "@reduxjs/toolkit";

export interface UIState {
  sidebarToggle: boolean;
}
const initialState: UIState = {
  sidebarToggle: false,
};
export const UISlice = createSlice({
  name: "ui_state", 
  initialState,
  reducers: {
    toggleNav: (state) => {
      state.sidebarToggle = !state.sidebarToggle;
    },
    closeNav: (state) => {
      state.sidebarToggle = false;
    },
    openNav: (state) => {
      state.sidebarToggle = true;
    },
  },
});

export const { toggleNav, closeNav, openNav } = UISlice.actions;
export default UISlice.reducer;
