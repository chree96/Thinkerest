import { RegisterInputInterface } from '../../screens/register/Register.types';
import { HttpMockApiAddress } from '../../services/http/HttpService';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: HttpMockApiAddress,
  }),
  endpoints(builder) {
    return {
      fetchHomePosts: builder.query<any, void>({
        query() {
          return 'home-posts';
        },
      }),
      registerUser: builder.mutation<any, RegisterInputInterface>({
        query: arg => ({
          url: 'auth/register',
          method: 'POST',
          body: arg,
        }),
      }),
      searchContent: builder.query<any, string>({
        query: arg => ({
          url: 'search-content-title',
          params: { title: arg },
        }),
      }),
      fetchContentDetail: builder.query<any, void>({
        query() {
          return 'content-details';
        },
      }),
      fetchContentReviews: builder.query<any, string>({
        query: arg => ({
          url: 'content-reviews',
          params: { contentId: arg },
        }),
      }),
    };
  },
});

// export const { reducer: apiReducer, endpoints: apiEndpoints } = apiSlice;

// export const selectContentDetailLoading =
//   apiEndpoints.fetchContentDetail.select;

export const {
  useRegisterUserMutation,
  useFetchHomePostsQuery,
  useSearchContentQuery,
  useFetchContentDetailQuery,
  useFetchContentReviewsQuery,
} = apiSlice;
