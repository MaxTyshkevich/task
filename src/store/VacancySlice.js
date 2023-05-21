import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getVacancies, getVacancy } from '../api/index.js';

export const fetchVacancies = createAsyncThunk(
  'vacancies/fetchVacancies',
  async function ({ keyword } = { keyword: '' }, { rejectWithValue }) {
    console.log(`params при запросе `, { keyword });
    try {
      const data = await getVacancies();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchVacancy = createAsyncThunk(
  'vacancies/fetchVacancy',
  async function (id, { rejectWithValue }) {
    try {
      const data = await getVacancy(id);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  vacancies: [],
  vacancy: null,
  isNextPage: null,
  countPages: 0,
  currentPage: 1,
  categories: [],
  favoriteList: [],
  isLoading: false,
  error: null,
};

const vacanciesSlice = createSlice({
  name: 'vacancies',
  initialState,

  extraReducers: {
    [fetchVacancies.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [fetchVacancies.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.vacancies = action.payload.objects;
      state.isNextPage = action.payload.more;
      state.countPages = Math.ceil(action.payload.total / 3);
    },
    [fetchVacancies.rejected]: (state, action) => {
      state.isLoading = false;
      state.vacancies = [];
      state.error = action.payload;
    },

    [fetchVacancy.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },

    [fetchVacancy.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.vacancy = action.payload;
    },

    [fetchVacancy.rejected]: (state, action) => {
      state.isLoading = false;
      state.vacancy = null;
      state.error = action.payload;
    },
  },
});

export default vacanciesSlice.reducer;
