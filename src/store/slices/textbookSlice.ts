import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: null,
};

const textbookSlice = createSlice({
  name: 'textbook',
  initialState,
  reducers: {
    setTextbook(state, action) {
      state.page = action.payload.page;
    },
  },
});

export const {setTextbook} = textbookSlice.actions;

export default textbookSlice.reducer;