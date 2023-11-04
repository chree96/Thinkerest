import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoginCredentials } from './authSlice.types';
import axios from 'axios';
import { HttpAddress } from '../../services/http/HttpService';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const loginUser = createAsyncThunk(
  'auth/login',
  async (credentials: LoginCredentials) => {
    try {
      const response = await axios.post(
        'http://localhost:3001/auth/login',
        // HttpAddress + 'auth/login',
        credentials,
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },
);

export const refreshUserToken = createAsyncThunk(
  'auth/refresh',
  async (payload, { rejectWithValue }) => {
    const refreshToken = await AsyncStorage.getItem('refreshToken');
    console.log({ refreshToken });

    if (refreshToken) {
      try {
        const response = await axios.post(
          'http://localhost:3001/auth/refresh',
          // HttpAddress + 'auth/refresh',
          { refreshToken: JSON.parse(refreshToken) },
        );
        return response.data;
      } catch (error) {
        throw error;
      }
    }

    return rejectWithValue('No refreshToken found');
  },
);
