import { configureStore, combineReducers } from '@reduxjs/toolkit';

import authReducer from './authSlice.js';
import vacanciesReducer from './VacancySlice.js';
import filterReducer from './filterSlice.js';
import favoriteReducer from './favoriteSlice.js';

const reducer = combineReducers({
  auth: authReducer,
  vac: vacanciesReducer,
  filters: filterReducer,
  favorite: favoriteReducer,
});

export const store = configureStore({
  reducer,
});
