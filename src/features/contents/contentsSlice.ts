import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ContentColor, ContentsState } from './contentsSlice.types';
import { ContentType } from '../../types/content';
import { RootState } from '../../app/store';
import { fetchSearchContent } from './contentActions';

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
