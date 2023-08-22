import React, { memo } from 'react';
import { PostProps } from './Post.types';
import { View } from 'react-native';
import { styles } from './Post.styles';
import UserShareInfo from '../../molecules/user-share-info/UserShareInfo';
import PostCard from '../../molecules/post-card/PostCard';
import { useWindowDimensions } from 'react-native';

const Post = memo<PostProps>(
  ({
    contentColor,
    postData,
    userData,
    onPress,
    onCommentPress,
    onSharePress,
    onWatchListPress,
    style,
  }) => {
    const { height: screenHeight } = useWindowDimensions();

    return (
      <View
        style={[styles.container, { minHeight: screenHeight * 0.5 }, style]}>
        <UserShareInfo shareInfo={userData} />
        <PostCard
          postData={postData}
          onPress={onPress}
          onCommentPress={onCommentPress}
          onSharePress={onSharePress}
          onWatchListPress={onWatchListPress}
          contentColor={contentColor}
        />
      </View>
    );
  },
);

export default Post;
