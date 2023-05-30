import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getVacancy } from '../api/index.js';

const getListFromLocalStorage = () => {
  let favoriteList = localStorage.getItem('favoriteList');
  if (favoriteList) {
    favoriteList = JSON.parse(favoriteList);
  }
  return favoriteList || [];
};

export const fetchFavoriteVacancies = createAsyncThunk(
  'vacancies/fetchFavoriteVacancy',
  async (params, { getState, dispatch }) => {
    const { favoriteList } = getState().favorite;
    let minIndex = 0;
    let maxIndex = 4;

    let page = 0;
    if (params?.page) {
      dispatch(setCurrentPage(params.page));
      page = params.page - 1;
    }
    minIndex = page * 4;
    maxIndex = minIndex + 4;

    const listPromise = favoriteList
      .slice(minIndex, maxIndex)
      .map((vacancyId) => getVacancy(vacancyId));
    const results = Promise.all(listPromise);

    return results;
  }
);

const initialState = {
  favoriteVacancies: [],
  countPages: Math.ceil(getListFromLocalStorage().length / 4),
  currentPage: 1,
  favoriteList: getListFromLocalStorage(),
  isLoading: false,
  error: null,
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = Number(action.payload);
    },

    addToFavorite(state, action) {
      state.favoriteList.push(action.payload);
      state.countPages = Math.ceil(state.favoriteList.length / 4);
    },
    delFromFavorite(state, action) {
      const updateList = state.favoriteList.filter(
        (el) => el !== action.payload
      );
      state.favoriteList = updateList;
      state.countPages = Math.ceil(updateList.length / 4);
    },
    setFavoriteList(state, action) {
      state.favoriteList = action.payload;
      state.countPages = Math.ceil(action.payload.length / 4);
    },
  },
  extraReducers: {
    [fetchFavoriteVacancies.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },

    [fetchFavoriteVacancies.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.favoriteVacancies = action.payload;
    },

    [fetchFavoriteVacancies.rejected]: (state, action) => {
      state.isLoading = false;
      state.favoriteVacancies = [];
    },
  },
});

export const {
  setCurrentPage,
  setFavoriteList,
  addToFavorite,
  delFromFavorite,
} = favoriteSlice.actions;

export default favoriteSlice.reducer;
