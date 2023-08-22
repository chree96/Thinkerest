import React from 'react';
import { ImageBackground, useWindowDimensions } from 'react-native';
import { styles } from './DetailBackgroundImage.styles';
import { DetailBackgroundImageProps } from './DetailBackgroundImage.types';

export default function DetailBackgroundImage({
  contentDetailImg,
  children,
  style,
}: DetailBackgroundImageProps) {
  const { width: screenWidth, height: screenHeight } = useWindowDimensions();

  return (
    <ImageBackground
      source={contentDetailImg}
      style={[
        styles.containerImage,
        {
          height: screenHeight * 0.5,
          width: screenWidth,
        },
        style,
      ]}
      imageStyle={[
        styles.image,
        {
          height: screenHeight * 0.85,
        },
      ]}>
      {children}
    </ImageBackground>
  );
}
