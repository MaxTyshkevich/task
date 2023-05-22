import { configureStore, combineReducers } from '@reduxjs/toolkit';

import authReducer from './authSlice.js';
import vacanciesReducer from './VacancySlice.js';
import filterReducer from './filterSlice.js';

const reducer = combineReducers({
  auth: authReducer,
  vac: vacanciesReducer,
  filters: filterReducer,
});

export const store = configureStore({
  reducer,
});
