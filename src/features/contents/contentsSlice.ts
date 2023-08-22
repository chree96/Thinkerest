import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ContentColor, ContentsState } from './contentsSlice.types';
import { ContentType } from '../../types/content';
import { RootState } from '../../app/store';
import axios from 'axios';
import { HttpAddress } from '../../services/http/HttpService';

const initialState: ContentsState = {
  contentType: ContentType.general,
  contentColor: ContentColor.general,
  foregroundContents: {
    general: {},
    movies: {},
    tvSeries: {},
    games: {},
    books: {},
    music: {},
  },
  isLoading: false,
};

export const fetchSearchContent = createAsyncThunk<
  any,
  undefined,
  { state: { contents: ContentsState } }
>('contents/fetchSearchContent', async (prova: any, { getState }) => {
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

export const contentsSlice = createSlice({
  name: 'contents',
  initialState,
  reducers: {
    setContentType: (state, action: PayloadAction<ContentType>) => {
      state.contentType = action?.payload;
      state.contentColor = ContentColor[action?.payload];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchSearchContent.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchSearchContent.fulfilled, (state, action) => {
        state.isLoading = false;
        state.foregroundContents[state.contentType] = action.payload;
      });
  },
});

export const { setContentType } = contentsSlice.actions;

export const selectContentType = (state: RootState) =>
  state.contents.contentType;
export const selectContentColor = (state: RootState) =>
  state.contents.contentColor;
export const selectForegroundContents = (state: RootState) =>
  state.contents?.foregroundContents;
export const selectForegroundContentsByType = (state: RootState) =>
  state.contents?.foregroundContents[state.contents.contentType];

export default contentsSlice.reducer;
