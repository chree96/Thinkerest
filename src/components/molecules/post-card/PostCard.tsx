import React, { memo, useCallback, useState } from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import { colors, sizes } from '../../../styles';
import { styles } from './PostCard.styles';
import { useMemo } from 'react';
import MoreButton from '../../atoms/more-button';
import { PostCardProps } from './PostCard.types';
import { PostAction } from '../../organisms/post/Post.types';
import { getActionIcon, getPostActionFn } from './PostCard.utils';
import ButtonWithIcon from '../../atoms/button-with-icon';
import IconWithText from '../icon-with-text';
import StarRating from '../star-rating';

const PostCard = memo<PostCardProps>(
  ({
    postData,
    contentColor,
    onPress,
    onCommentPress,
    onSharePress,
    onWatchListPress,
    style,
  }) => {
    const { width: screenWidth, height: screenHeight } = useWindowDimensions();
    const [isVisible, setIsVisible] = useState(false);
    const actionFunctions = useMemo(
      () => ({
        onCommentPress,
        onSharePress,
        onWatchListPress,
      }),
      [onCommentPress, onSharePress, onWatchListPress],
    );

    const actionButtons = useMemo(
      () =>
        (Object.keys(PostAction) as (keyof typeof PostAction)[]).map(key => {
          const icon = getActionIcon(PostAction[key]);
          const action = getPostActionFn(PostAction[key], actionFunctions);

          return (
            <View key={'button-' + key} style={styles.buttonsContainer}>
              <ButtonWithIcon
                noBackgroundColor
                iconColor={colors.doveGrey}
                iconName={icon}
                width={26}
                iconSize={24}
                onPress={() => action()}
              />
              {key === PostAction.COMMENT ? (
                <Text style={styles.buttonIconText}>4</Text>
              ) : null}
            </View>
          );
        }),
      [actionFunctions],
    );

    const toggleVisibility = useCallback(() => {
      setIsVisible(!isVisible);
    }, [isVisible]);

    const Review = useCallback(
      () => (
        <View style={styles.reviewContainer}>
          <View style={styles.contentInfoContainer}>
            {actionButtons}

            <IconWithText
              svgName={'speechBubble'}
              text={''}
              width={26}
              textStyle={{ color: colors.doveGrey }}
              svgColor={colors.doveGrey}
            />
          </View>
          {isVisible ? (
            <Text style={styles.reviewText}>{postData?.review}</Text>
          ) : null}
          <MoreButton
            style={styles.moreButton}
            textColor={contentColor}
            isVisible={true}
            isShowingMore={isVisible}
            onPress={toggleVisibility}
          />
        </View>
      ),
      [
        contentColor,
        isVisible,
        postData?.review,
        actionButtons,
        toggleVisibility,
      ],
    );

    return (
      <View
        style={[
          // shadows.little,
          styles.cardContainer,
          { width: screenWidth * 0.69 },
          style,
        ]}>
        <TouchableOpacity
          onPress={onPress}
          style={[styles.imgContainer, { height: screenHeight * 0.4 }]}>
          <Image
            source={postData?.contentImg}
            style={styles.imgStyle}
            key={postData?.contentImg}
            resizeMode={'cover'}
          />
          {/* {actionButtons} */}
        </TouchableOpacity>
        <View style={styles.contentInfoContainer}>
          {actionButtons}

          <IconWithText
            svgName={'speechBubble'}
            text={''}
            width={26}
            textStyle={{ color: colors.doveGrey }}
            svgColor={colors.doveGrey}
          />
        </View>

        <StarRating
          rating={5}
          // rating={rating || 5}
          starSize={sizes.littleMedium}
          style={{
            alignSelf: 'flex-start',
            paddingVertical: 4,
            paddingLeft: 4,
          }}
        />

        <View
          style={{
            paddingHorizontal: 6,
            paddingBottom: 12,
            borderBottomColor: colors.lightGrey,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            // borderBottomWidth: 0.5,
            borderRadius: 10,
          }}>
          <Text style={styles.reviewText}>{postData?.review}</Text>
        </View>
        {/* </TouchableOpacity> */}
      </View>
    );
  },
);
export default PostCard;
