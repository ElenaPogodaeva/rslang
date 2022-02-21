import { configureStore } from '@reduxjs/toolkit';
import textbookSlice from './slices/textbookSlice';
import userReducer from './slices/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    textbook: textbookSlice,
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
