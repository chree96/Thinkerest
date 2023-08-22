import React from 'react';
import { TouchableOpacity, View, useWindowDimensions } from 'react-native';
import { styles } from './ContentReviewsTabBar.styles';
import IconWithText from '../icon-with-text';
import { colors } from '../../../styles';
import { ContentReviewsTabBarProps } from './ContentReviewsTabBar.types';

export default function ContentReviewsTabBar({
  activeIndex,
  contentColor,
  onFriendsPress,
  onGlobalPress,
  style,
}: ContentReviewsTabBarProps) {
  const { width: screenWidth } = useWindowDimensions();

  return (
    <View
      style={[
        styles.tabBarContainer,
        {
          width: screenWidth * 0.92,
        },
        style,
      ]}>
      <TouchableOpacity onPress={onFriendsPress} style={styles.tabBarCustom}>
        <IconWithText
          svgName={'people'}
          textStyle={
            activeIndex === 0
              ? {
                  color: contentColor,
                }
              : null
          }
          width={24}
          text={'7'}
          svgColor={activeIndex === 0 ? contentColor : colors.solidWhite}
          style={styles.buttonContainer}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={onGlobalPress} style={styles.tabBarCustom}>
        <IconWithText
          svgName={'world'}
          textStyle={
            activeIndex === 1
              ? {
                  color: contentColor,
                }
              : null
          }
          svgColor={activeIndex === 1 ? contentColor : colors.solidWhite}
          style={styles.buttonContainer}
          text={'10k'}
        />
      </TouchableOpacity>
    </View>
  );
}
