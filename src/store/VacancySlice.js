import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getVacancies, getVacancy } from '../api/index.js';

export const fetchVacancies = createAsyncThunk(
  'vacancies/fetchVacancies',
  async function (params, { rejectWithValue, dispatch }) {
    try {
      if (!params?.page) {
        dispatch(setCurrentPage(1));
      } else {
        dispatch(setCurrentPage(params.page));
      }

      const data = await getVacancies(params);

      return data;
    } catch (error) {
      console.log({ error });
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
  countPages: 0,
  currentPage: 1,
  categories: [],
  isLoading: false,
  error: null,
};

const vacanciesSlice = createSlice({
  name: 'vacancies',
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = Number(action.payload);
    },
  },
  extraReducers: {
    [fetchVacancies.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [fetchVacancies.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.vacancies = action.payload.objects;
      state.countPages =
        action.payload.total > 500 ? 125 : Math.ceil(action.payload.total / 4);
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

export const { setCurrentPage } = vacanciesSlice.actions;

export default vacanciesSlice.reducer;
