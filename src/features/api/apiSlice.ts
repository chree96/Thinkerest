import { HttpAddress, PostApiAddress } from '../../services/http/HttpService';
import { RootState } from '../../app/store';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: HttpAddress,
    prepareHeaders: (headers, { getState }) => {
      const accessToken = (getState() as RootState).auth.accessToken;
      if (accessToken) {
        headers.set('Authorization', `Bearer ${accessToken}`);
      }
      return headers;
    },
  }),
  endpoints(builder) {
    return {
      fetchHomePosts: builder.query<any, void>({
        query() {
          return `${PostApiAddress}/post`;
        },
        transformResponse: (response: { result?: unknown[]; results?: unknown[] }) => ({
          results: response.result ?? response.results ?? [],
        }),
      }),
      searchContent: builder.query<any, string>({
        query: arg => {
          return {
            url: 'search-content-title',
            params: { title: arg },
          };
        },
      }),
      fetchContentDetail: builder.query<any, void>({
        query() {
          return 'content-details';
        },
      }),
      fetchContentReviews: builder.query<any, string>({
        query: arg => {
          return {
            url: 'content-reviews',
            params: { contentId: arg },
          };
        },
      }),
    };
  },
});

// export const { reducer: apiReducer, endpoints: apiEndpoints } = apiSlice;

// export const selectContentDetailLoading =
//   apiEndpoints.fetchContentDetail.select;

export const {
  useFetchHomePostsQuery,
  useSearchContentQuery,
  useFetchContentDetailQuery,
  useFetchContentReviewsQuery,
} = apiSlice;
