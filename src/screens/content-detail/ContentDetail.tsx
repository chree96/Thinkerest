import React, { memo, useCallback } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import DetailBackgroundImage from '../../components/molecules/detail-background-image';
import { styles } from './ContentDetail.styles';
import DetailBackgroundData from '../../components/molecules/detail-background-data';
import DetailBackgroundHeader from '../../components/molecules/detail-background-header';
// import AnimatedLoader from 'react-native-animated-loader';
import { globalStyle } from '../../styles';
import DetailPlot from '../../components/molecules/detail-plot';
import DetailRating from '../../components/molecules/detail-rating';
import DetailCredits from '../../components/molecules/detail-credits';
import ReviewItem from '../../components/molecules/review-item';
import ContentReviewsTabBar from '../../components/molecules/content-reviews-tab-bar';
import getContentColor from '../../utils/content/get-content-color';
import LinearGradient from 'react-native-linear-gradient';
import { ContentDetailProps } from './ContentDetail.types';
import { useContentDetail } from './useContentDetail';

const ContentDetail = memo<ContentDetailProps>(({ navigation }) => {
  const {
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
  } = useContentDetail();

  const { rating, contentType } = contentDetail || {};

  const renderReviews = useCallback(
    (item, index) => (
      <ReviewItem
        key={reviewKeyExtractor(index)}
        user={item?.user}
        userImg={item?.userImg}
        review={item?.review}
      />
    ),
    [reviewKeyExtractor],
  );

  const Reviews = useCallback(
    () =>
      reviewsData?.length ? (
        <View
          onStartShouldSetResponder={(): boolean => true}
          style={styles.reviewContainer}>
          {reviewsData?.map((item, index) => renderReviews(item, index))}
        </View>
      ) : null,
    [renderReviews, reviewsData],
  );

  const Ratings = useCallback(
    () => (
      <>
        <DetailRating
          rate={contentDetail?.peopleRate}
          ratingData={rating}
          contentColor={getContentColor(contentType)}
        />

        <ContentReviewsTabBar
          activeIndex={reviewsTabViewState}
          contentColor={getContentColor(contentType)}
          onFriendsPress={() => setReviewsTabViewState(0)}
          onGlobalPress={() => setReviewsTabViewState(1)}
        />
      </>
    ),
    [
      contentDetail?.peopleRate,
      contentType,
      rating,
      setReviewsTabViewState,
      reviewsTabViewState,
    ],
  );

  return isFetchingContentDetail ? (
    <View style={[styles.container, globalStyle.loaderContainer]}>
      {/* <AnimatedLoader
          visible={true}
          source={require('../../../assets/animations/loader-bars-mono-color.json')}
          animationStyle={globalStyle.lottieLoader}
          speed={1}
        /> */}
    </View>
  ) : (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <DetailBackgroundImage contentDetailImg={{ uri: contentImage }}>
        <DetailBackgroundHeader onGoBack={() => navigation.goBack()} />
        <DetailBackgroundData data={backgroundData} />
      </DetailBackgroundImage>

      <TouchableOpacity
        style={styles.infoTouchable}
        disabled={isInfoBtnVisible}
        onPress={toggleVisibility}>
        <View
          style={[
            styles.infoContainer,
            { maxHeight: isInfoBtnVisible ? undefined : 100 },
          ]}>
          <Text style={styles.titleText}>{'Info'}</Text>
          <DetailPlot plot={contentDetail?.plot} />
          <DetailCredits credits={contentDetail?.credits} />
          <LinearGradient
            colors={['rgba(0, 0, 0, 0)', 'rgba(0,0,0, 1)']}
            style={[styles.obscuredView]}
          />
        </View>
      </TouchableOpacity>
      <Ratings />
      <Reviews />
    </ScrollView>
  );
});

export default ContentDetail;
