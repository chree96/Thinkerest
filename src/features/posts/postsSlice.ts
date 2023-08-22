import { createSlice } from '@reduxjs/toolkit';
import { PostsState } from './postsSlice.types';

const initialState: PostsState = {
  homePosts: [],
  isLoading: false,
  error: null,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // storeHomePosts: (state, action: PayloadAction<any>) => {
    //   state.homePosts = action.payload;
    // },
  },
  // extraReducers: builder => {
  //   builder
  //     .addCase(fetchHomePosts.pending, state => {
  //       state.isLoading = true;
  //       state.error = null;
  //     })
  //     .addCase(fetchHomePosts.fulfilled, (state, action) => {
  //       state.homePosts = action.payload;
  //       state.isLoading = false;
  //       state.error = null;
  //     })
  //     .addCase(fetchHomePosts.rejected, (state, action) => {
  //       state.isLoading = false;
  //       state.error = action.error.message;
  //     });
  // },
});

export default counterSlice.reducer;
