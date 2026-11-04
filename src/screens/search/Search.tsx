import React, { memo, useCallback } from 'react';
import { FlatList, Text, View, ScrollView } from 'react-native';
import ContentSectionImage from '../../components/atoms/content-section-image';
import HeaderText from '../../components/molecules/header-text';
import { globalStyle } from '../../styles';
import {
  ContentGenre,
  ContentSearchSections,
  ContentType,
} from '../../types/content';
import { styles } from './Search.styles';
import { SearchProps } from './Search.types';
import { SearchSectionContent } from '../../features/contents/contentsSlice.types';
import { useSearch } from './useSearch';
import SearchHeader from '../../components/organisms/search-header';
import { useHeaderScroll } from '../../hooks/useHeaderScroll';

const Search = memo<SearchProps>(({ navigation }) => {
  const {
    searchedContentPreview,
    contentType,
    contentColor,
    genreButtons,
    sectionTitle,
    getContents,
    goToContentDetail,
    changeContentType,
    searchContent,
  } = useSearch(navigation);

  const { isHiddenHeader, setHeaderVisibility, setScrollYOnScrollBeginDrag } =
    useHeaderScroll();

  const renderSearchedContentList = useCallback(
    ({ item }: { item: string }) => (
      <View style={styles.searchedContentContainer}>
        <Text style={styles.searchedContentText}>{item}</Text>
      </View>
    ),
    [],
  );

  const renderSingleContent = useCallback(
    ({ item }: { item: any }) => (
      <ContentSectionImage
        contentSectionImg={{ uri: item?.image?.url }}
        onPress={() => goToContentDetail(item?.id)}
      />
    ),
    [goToContentDetail],
  );

  const renderContentSections = useCallback(
    () =>
      Object.keys(ContentSearchSections).map(section => {
        let title = sectionTitle(section as ContentSearchSections);
        let content = getContents(section as ContentSearchSections);

        if (section === ContentSearchSections.GENRE) {
          return Object.keys(ContentGenre).map(genre => {
            title = sectionTitle(
              section as ContentSearchSections,
              genre as ContentGenre,
            );
            content = getContents(
              section as ContentSearchSections,
              genre as ContentGenre,
            );
            return (
              <View
                key={section + '-' + genre + '-section'}
                style={styles.contentContainer}
              >
                <HeaderText text={title} style={{ marginLeft: 8 }} />
                <FlatList
                  data={content as SearchSectionContent[]}
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={(item, index) => section + index}
                  renderItem={renderSingleContent}
                  horizontal
                />
              </View>
            );
          });
        }

        return (
          <View key={section + '-section'} style={styles.contentContainer}>
            <HeaderText
              text={title}
              style={{ marginLeft: 10, paddingBottom: 8 }}
            />
            <FlatList
              data={content as SearchSectionContent[]}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => section + index}
              renderItem={renderSingleContent}
              horizontal
            />
          </View>
        );
      }),
    [sectionTitle, getContents, renderSingleContent],
  );

  return false ? (
    <View style={[styles.pageContainer, globalStyle.loaderContainer]}>
      {/* INSERIRE LOADER */}
    </View>
  ) : (
    <View style={styles.pageContainer}>
      <SearchHeader
        isHiddenHeader={isHiddenHeader}
        contentType={contentType}
        contentColor={contentColor}
        setContentType={changeContentType}
        searchContent={(title: string) => searchContent(title)}
      />
      {searchedContentPreview?.length > 0 ? (
        <FlatList
          data={searchedContentPreview}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => 'searched-content-' + index}
          scrollEventThrottle={16}
          onScroll={event => {
            setHeaderVisibility(event.nativeEvent.contentOffset.y);
          }}
          onScrollBeginDrag={event =>
            setScrollYOnScrollBeginDrag(event.nativeEvent.contentOffset.y)
          }
          renderItem={renderSearchedContentList}
        />
      ) : (
        <ScrollView
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingTop: 120 }}
          onScroll={event => {
            setHeaderVisibility(event.nativeEvent.contentOffset.y);
          }}
          onScrollBeginDrag={event =>
            setScrollYOnScrollBeginDrag(event.nativeEvent.contentOffset.y)
          }
        >
          {contentType !== ContentType.general ? (
            <View style={styles.pillButtonsContainer}>{genreButtons}</View>
          ) : null}
          {renderContentSections()}
        </ScrollView>
      )}
    </View>
  );
});

export default Search;
