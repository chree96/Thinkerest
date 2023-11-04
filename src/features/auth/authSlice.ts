import { createSlice } from '@reduxjs/toolkit';
import { AuthState } from './authSlice.types';
import { loginUser, refreshUserToken } from './authActions';
import { RootState } from '../../app/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { removeItemValue } from '../../utils/remove-item-from-async-storage';

const initialState: AuthState = {
  accessToken: null,
  user: null,
  isLoading: true,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: state => {
      state.accessToken = null;
      state.user = null;
      removeItemValue('refreshToken');
    },
  },
  extraReducers: builder => {
    // LOGIN
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
      state.isLoading = false;

      const refreshToken = JSON.stringify(action.payload.refreshToken);
      AsyncStorage.setItem('refreshToken', refreshToken);
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
      removeItemValue('refreshToken');
    });
  },
});

export const { logout } = authSlice.actions;

export const selectIsLoggedIn = (state: RootState) =>
  state.auth.accessToken !== null;
export const selectIsLoadingAuth = (state: RootState) =>
  state.auth.isLoading === true;

export default authSlice.reducer;
