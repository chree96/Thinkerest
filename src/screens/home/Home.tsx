import React, { memo } from 'react';
import { FlatList, View } from 'react-native';
import { styles } from './Home.styles';
import Post from '../../components/organisms/post';
import { useCallback } from 'react';
import { colors, globalStyle } from '../../styles';
import { getMappedData } from './Home.utils';
import { HomeProps } from './Home.types';
import { useHome } from './useHome';
import MainHeader from '../../components/organisms/main-header';
import { useHeaderScroll } from '../../hooks/useHeaderScroll';
import ButtonWithIcon from '../../components/atoms/button-with-icon';

const Home = memo<HomeProps>(({ navigation }) => {
  const {
    homePosts,
    contentType,
    contentColor,
    changeContentType,
    goToContentDetail,
  } = useHome(navigation);

  const { isHiddenHeader, setHeaderVisibility, setScrollYOnScrollBeginDrag } =
    useHeaderScroll();

  const renderPosts = useCallback(
    ({ item }: { item: any }) => {
      const { postData, userData } = getMappedData(item);

      return (
        <Post
          postData={postData}
          userData={userData}
          contentColor={contentColor}
          onPress={() => goToContentDetail(postData?.contentId)}
          onCommentPress={() => console.log('comment')}
          onSharePress={() => console.log('share')}
          onWatchListPress={() => console.log('watchList')}
        />
      );
    },
    [contentColor, goToContentDetail],
  );

  return false ? (
    <View style={[styles.listContainer, globalStyle.loaderContainer]}>
      {/* <AnimatedLoader
          visible={true}
          source={require('../../../assets/animations/loader-bars-mono-color.json')}
          animationStyle={globalStyle.lottieLoader}
          speed={1}
        /> */}
    </View>
  ) : (
    <View style={styles.listContainer}>
      <MainHeader
        contentType={contentType}
        contentColor={contentColor}
        setContentType={changeContentType}
        isHiddenHeader={isHiddenHeader}
      />

      {/* POST LIST */}
      <FlatList
        renderItem={renderPosts}
        data={homePosts}
        keyExtractor={item => 'post-' + item?.id}
        onScroll={event => {
          setHeaderVisibility(event.nativeEvent.contentOffset.y);
        }}
        onScrollBeginDrag={event =>
          setScrollYOnScrollBeginDrag(event.nativeEvent.contentOffset.y)
        }
        scrollEventThrottle={16}
        style={styles.listPaddingTop}
      />

      {/* FILTER BTN */}
      <ButtonWithIcon
        iconName={'controls'}
        width={50}
        style={styles.filterButton}
        iconColor={colors.mineShaft}
        onPress={() => console.log('filter')}
      />
    </View>
  );
});

export default Home;
