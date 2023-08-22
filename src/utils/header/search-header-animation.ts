import { Animated, Easing } from 'react-native';

// HEADER ANIMATION
const headerY = new Animated.Value(0);

export const getSearchHeaderAnimationStyles = () => {
  const yInterpolate = headerY.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 2],
  });

  const transformHeaderCollapse = {
    transform: [{ translateY: yInterpolate }],
  };

  const headerAnimationValues = {
    transformHeaderCollapse: transformHeaderCollapse,
  };
  return headerAnimationValues;
};

export const startCollapse = (isHiddenHeader: boolean) => {
  Animated.timing(headerY, {
    toValue: isHiddenHeader ? -35 : 0,
    duration: 250,
    easing: Easing.linear,
    useNativeDriver: true,
  }).start();
};
