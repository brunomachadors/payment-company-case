import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  menu: false,
};

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    openMenu: (state) => {
      state.menu = true;
    },

    closeMenu: (state) => {
      state.menu = false;
    },
  },
});

export const { openMenu, closeMenu } = menuSlice.actions;

const menuReducer = menuSlice.reducer;
export default menuReducer;
