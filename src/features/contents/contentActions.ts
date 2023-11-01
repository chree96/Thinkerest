import { createAsyncThunk } from '@reduxjs/toolkit';
import { ContentsState } from './contentsSlice.types';
import axios from 'axios';
import { HttpAddress } from '../../services/http/HttpService';

export const fetchSearchContent = createAsyncThunk<
  any,
  undefined,
  { state: { contents: ContentsState } }
>('contents/fetchSearchContent', async (payload: any, { getState }) => {
  const { contentType } = getState()?.contents;

  return axios
    .get(HttpAddress + 'search-section-contents', {
      params: { contentType },
    })
    .then(response => {
      const results = response?.data?.results;
      return results;
    })
    .catch(error => {
      console.log('ERROR IN fetchSearchContent', error);
      return '';
    });
});
