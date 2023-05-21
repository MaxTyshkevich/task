import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getToken } from '../api/index.js';

export const fetchAuthorization = createAsyncThunk(
  'authorization/fetchAuthorization',
  async function () {
    try {
      const data = await getToken();

      return data;
    } catch (error) {
      console.log(`Authorization error`);
    }
  }
);

const initialState = {
  accessToken: null,
  refreshToken: null,
  ttl: null,
  expiresIn: null,
  tokenType: null,
  regUserResumesCount: null,
};

const authorizationSlice = createSlice({
  name: 'authorization',
  initialState,

  extraReducers: {
    [fetchAuthorization.fulfilled]: (state, action) => {
      state.accessToken = action.payload['access_token'];
      state.refreshToken = action.payload['refresh_token'];
      state.ttl = action.payload['ttl'];
      state.expiresIn = action.payload['expires_in'];
      state.tokenType = action.payload['token_type'];
    },
  },
});

export default authorizationSlice.reducer;
