import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoginCredentials } from './authSlice.types';
import axios from 'axios';
import { HttpAddress } from '../../services/http/HttpService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RegisterInputInterface } from '../../screens/register/Register.types';

export const loginUser = createAsyncThunk(
  'auth/login',
  async (credentials: LoginCredentials) => {
    try {
      const response = await axios.post(
        HttpAddress + 'auth/login',
        credentials,
      );
      console.log('response.data', response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
);

export const registerUser = createAsyncThunk(
  'auth/register',
  async (payload: RegisterInputInterface) => {
    try {
      const response = await axios.post(HttpAddress + 'auth/register', payload);
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

    if (refreshToken) {
      try {
        const response = await axios.post(HttpAddress + 'auth/refresh', {
          refreshToken: JSON.parse(refreshToken),
        });
        return response.data;
      } catch (error) {
        throw error;
      }
    }

    return rejectWithValue('No refreshToken found');
  },
);
