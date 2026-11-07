import { createSlice } from '@reduxjs/toolkit';
import { AuthState } from './authSlice.types';
import { loginUser, logoutUser, refreshUserToken } from './authActions';
import { RootState } from '../../app/store';

const initialState: AuthState = {
  accessToken: null,
  user: null,
  isLoading: true,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearAuth: state => {
      state.accessToken = null;
      state.user = null;
    },
  },
  extraReducers: builder => {
    // LOGIN
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
      state.isLoading = false;

    });
    builder.addCase(loginUser.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(loginUser.rejected, state => {
      state.isLoading = false;
    });
    // REFRESH
    builder.addCase(refreshUserToken.fulfilled, (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
      state.isLoading = false;
    });
    builder.addCase(refreshUserToken.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(refreshUserToken.rejected, state => {
      state.user = null;
      state.accessToken = null;
      state.isLoading = false;
    });
    builder.addCase(logoutUser.fulfilled, state => {
      state.accessToken = null;
      state.user = null;
      state.isLoading = false;
    });
  },
});

export const { clearAuth } = authSlice.actions;

export const selectIsLoggedIn = (state: RootState) =>
  state.auth.accessToken !== null;
export const selectIsLoadingAuth = (state: RootState) =>
  state.auth.isLoading === true;

export default authSlice.reducer;
