import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedCard: {
    name: null,
    card_number: null,
    expiry_date: {
      month: null,
      year: null,
    },
    cvv: null,
    flag: null,
    type: null,
    style: null,
    main_category: null,
  },
};

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    selectCard: (state, action) => {
      state.selectedCard = action.payload;
    },
  },
});

export const { selectCard } = cardSlice.actions;

const cardReducer = cardSlice.reducer;
export default cardReducer;
