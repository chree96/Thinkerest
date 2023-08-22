import { useCallback, useEffect, useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  fetchSearchContent,
  selectContentColor,
  selectContentType,
  selectForegroundContentsByType,
  setContentType,
} from '../../features/contents/contentsSlice';
import { getGenreButtons, getSectionTitle } from './utils';
import {
  ContentGenre,
  ContentSearchSections,
  ContentType,
} from '../../types/content';
import { useSearchContentQuery } from '../../features/api/apiSlice';

export const useSearch = (navigation: any) => {
  const dispatch = useAppDispatch();

  const contentType = useAppSelector(selectContentType);
  const contentColor = useAppSelector(selectContentColor);
  const foregroundContents = useAppSelector(selectForegroundContentsByType);

  const [searchedTitle, setSearchedTitle] = useState('');
  const [searchedContentPreview, setSearchedContentPreview] = useState<
    string[]
  >([]);

  const { data, isError, isFetching } = useSearchContentQuery(searchedTitle);

  useEffect(() => {
    if (!isFetching && !isError && searchedTitle?.length > 2) {
      console.log('searchedTitle', searchedTitle);
      setSearchedContentPreview(data?.results);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetching]);

  useEffect(() => {
    dispatch(fetchSearchContent());
  }, [dispatch]);

  useEffect(() => {
    setSearchedTitle('');
  }, []);

  useEffect(() => {
    if (searchedTitle?.length < 3) {
      console.log('tacci tua');
      setSearchedContentPreview([]);
    }
  }, [searchedTitle]);

  const genreButtons = useMemo(
    () => getGenreButtons(contentType, contentColor),
    [contentColor, contentType],
  );

  const changeContentType = useCallback(
    (newContentType: ContentType) => {
      dispatch(setContentType(newContentType));
    },
    [dispatch],
  );

  const searchContent = useCallback(
    (title: string) => {
      if (title?.length > 2) {
        setSearchedTitle(title);
      } else if (searchedContentPreview?.length > 0) {
        setSearchedContentPreview([]);
      }
    },
    [searchedContentPreview?.length],
  );

  const goToContentDetail = useCallback((contentId: string) => {
    navigation.navigate('ContentDetail', { contentId });
  }, []);

  const sectionTitle = useCallback(
    (section: ContentSearchSections, genre?: ContentGenre) =>
      getSectionTitle(section, genre),
    [],
  );

  const getContents = useCallback(
    (section: ContentSearchSections, genre?: ContentGenre) => {
      switch (section) {
        case ContentSearchSections.TOP_RATED:
          return foregroundContents?.topRated;
        case ContentSearchSections.GENRE:
          switch (genre) {
            case ContentGenre.ACTION:
              return foregroundContents?.byGenre?.action;
            case ContentGenre.ADVENTURE:
              return foregroundContents?.byGenre?.adventure;
            case ContentGenre.ROMANTIC:
              return foregroundContents?.byGenre?.romantic;
            default:
              [];
          }
          return foregroundContents?.byGenre;
        case ContentSearchSections.RECOMMENDED:
          return foregroundContents?.recommended;
        default:
          return [];
      }
    },
    [
      foregroundContents?.byGenre,
      foregroundContents?.recommended,
      foregroundContents?.topRated,
    ],
  );

  return {
    searchedContentPreview,
    contentType,
    contentColor,
    genreButtons,
    sectionTitle,
    getContents,
    goToContentDetail,
    changeContentType,
    searchContent,
  };
};
