import { HttpAddress } from '../../services/http/HttpService';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: HttpAddress,
  }),
  endpoints(builder) {
    return {
      fetchHomePosts: builder.query<any, void>({
        query() {
          return 'home-posts';
        },
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
