import { configureStore } from '@reduxjs/toolkit';
import textReducer from './slices/slice';

export const store = configureStore({
  reducer: textReducer
});
