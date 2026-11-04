import { useCallback, useEffect, useMemo, useState } from 'react';
import formatDuration from '../../utils/content/format-duration';
import { RouteProp, useRoute } from '@react-navigation/native';
import {
  useFetchContentDetailQuery,
  useFetchContentReviewsQuery,
} from '../../features/api/apiSlice';
import { ParamList } from './ContentDetail.types';

export const useContentDetail = () => {
  const route = useRoute<RouteProp<ParamList>>();
  const { contentId } = route?.params || {};

  const {
    data: contentDetailData,
    isFetching: isFetchingContentDetail,
    isError: isContentDetailError,
  } = useFetchContentDetailQuery();

  const {
    data: contentReviewsData,
    isFetching: isFetchingContentReviews,
    isError: isContentReviewsError,
  } = useFetchContentReviewsQuery(contentId);

  const [reviewsTabViewState, setReviewsTabViewState] = useState<0 | 1>(0);
  const [isInfoBtnVisible, setInfoBtnVisible] = useState(false);
  const [contentDetail, setContentDetail] = useState<any>();
  const [contentReviews, setContentReviews] = useState<any>();

  const { friends: friendsContentReviews, people: peopleContentReviews } =
    contentReviews || {};
  const { title, genre, year, runningTimeInMinutes, image } =
    contentDetail || {};

  const formattedDuration = formatDuration(runningTimeInMinutes);
  const contentImage = image?.url || 'a';
  const backgroundData = { title, genre, year, duration: formattedDuration };

  useEffect(() => {
    if (!isFetchingContentDetail && !isContentDetailError) {
      setContentDetail(contentDetailData?.results);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contentDetailData]);

  useEffect(() => {
    if (!isFetchingContentReviews && !isContentReviewsError) {
      setContentReviews(contentReviewsData?.results);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contentReviewsData]);

  useEffect(() => {
    setInfoBtnVisible(false);
  }, []);

  const reviewsData = useMemo(
    () =>
      reviewsTabViewState === 0 ? friendsContentReviews : peopleContentReviews,
    [friendsContentReviews, peopleContentReviews, reviewsTabViewState],
  );

  const toggleVisibility = useCallback(() => {
    setInfoBtnVisible(!isInfoBtnVisible);
  }, [isInfoBtnVisible]);

  const reviewKeyExtractor = useCallback(
    (index: number) => {
      const section =
        reviewsTabViewState === 0 ? 'friend-review-' : 'person-review-';

      return section + index;
    },
    [reviewsTabViewState],
  );

  return {
    contentImage,
    backgroundData,
    reviewsData,
    isFetchingContentDetail,
    contentDetail,
    isInfoBtnVisible,
    reviewsTabViewState,
    setReviewsTabViewState,
    reviewKeyExtractor,
    toggleVisibility,
  };
};
