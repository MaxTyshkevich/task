import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCategories } from '../api/index.js';

export const fetchCategories = createAsyncThunk(
  'vacancies/fetchCategories',
  async function (_, { rejectWithValue }) {
    try {
      const data = await getCategories();

      return data;
    } catch (error) {
      /* return rejectWithValue(error.message); */
    }
  }
);

const initialState = {
  categories: [],

  isLoading: false,
  error: null,
  select: '',

  selectCategories: null,
  minSalary: '',
  maxSalary: '',
};

const filerSlice = createSlice({
  name: 'vacancies',
  initialState,
  reducers: {
    changeSearch(state, action) {
      state.select = action.payload;
    },

    changeSelect(state, action) {
      state.selectCategories = action.payload;
    },
    changeMinSalary(state, action) {
      state.minSalary = action.payload;
    },
    changechangeMaxSalary(state, action) {
      state.maxSalary = action.payload;
    },
    resetFilter(state) {
      state.selectCategories = null;
      state.minSalary = '';
      state.maxSalary = '';
    },
  },
  extraReducers: {
    [fetchCategories.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [fetchCategories.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.categories = action.payload;
    },
    [fetchCategories.rejected]: (state, action) => {
      state.isLoading = false;
      state.categories = [];
      state.error = action.payload;
    },
  },
});
export const {
  changeSearch,
  changeMinSalary,
  changeSelect,
  changechangeMaxSalary,
  resetFilter,
} = filerSlice.actions;

export default filerSlice.reducer;
