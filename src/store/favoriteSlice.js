import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  favoriteList: [],
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addToFavorite(state, action) {
      state.favoriteList.push(action.payload);
    },

    delFromFavorite(state, action) {
      state.favoriteList.filter((item) => item.id !== action.payload.id);
    },
  },
});
export const { addToFavorite, delFromFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
