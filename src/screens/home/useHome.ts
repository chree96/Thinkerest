import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFetchHomePostsQuery } from '../../features/api/apiSlice';
import {
  selectContentColor,
  selectContentType,
  setContentType,
} from '../../features/contents/contentsSlice';
import { ContentType } from '../../types/content';
import { useAppSelector } from '../../app/hooks';
import { Screen } from '../../constants/Screen';

export const useHome = (navigation: any) => {
  const dispatch = useDispatch();
  const {
    data: userPosts = [],
    isFetching,
    isError,
  } = useFetchHomePostsQuery();

  const contentType = useAppSelector(selectContentType);
  const contentColor = useAppSelector(selectContentColor);

  const [homePosts, setHomePosts] = useState<any>();

  useEffect(() => {
    if (!isFetching && !isError) {
      setHomePosts(userPosts?.results);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userPosts]);

  const changeContentType = useCallback(
    (newContentType: ContentType) => {
      dispatch(setContentType(newContentType));
    },
    [dispatch],
  );

  const goToContentDetail = (contentId: string) => {
    navigation.navigate(Screen.ContentDetail, { contentId });
  };

  return {
    homePosts,
    contentType,
    contentColor,
    changeContentType,
    goToContentDetail,
  };
};
