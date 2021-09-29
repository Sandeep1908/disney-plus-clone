import { configureStore } from '@reduxjs/toolkit';
import movieReducer from '../features/movieSlice/movie';

export const store = configureStore({
  reducer: {
    movie:movieReducer
  },
});
