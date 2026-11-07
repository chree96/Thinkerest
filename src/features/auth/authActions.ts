import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoginCredentials } from './authSlice.types';
import axios from 'axios';
import { AuthApiAddress } from '../../services/http/HttpService';
import {
  clearRefreshToken,
  getRefreshToken,
  saveRefreshToken,
} from './secureTokenStorage';

type AuthResponse = {
  accessToken: string;
  refreshToken?: string;
  user: unknown;
};

export const loginUser = createAsyncThunk(
  'auth/login',
  async (credentials: LoginCredentials) => {
    const response = await axios.post<AuthResponse>(
      `${AuthApiAddress}/auth/login`,
      { username: credentials.email, password: credentials.password },
    );
    if (response.data.refreshToken) {
      await saveRefreshToken(response.data.refreshToken);
    }
    return response.data;
  },
);

export const refreshUserToken = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWithValue }) => {
    const refreshToken = await getRefreshToken();
    if (!refreshToken) {
      return rejectWithValue('No refresh token found');
    }

    try {
      const response = await axios.post<AuthResponse>(
        `${AuthApiAddress}/auth/refresh`,
        { refreshToken },
      );
      if (response.data.refreshToken) {
        await saveRefreshToken(response.data.refreshToken);
      }
      return response.data;
    } catch (error) {
      await clearRefreshToken();
      throw error;
    }
  },
);

export const logoutUser = createAsyncThunk('auth/logout', async () => {
  await clearRefreshToken();
});
