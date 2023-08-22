import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { styles } from './ContentSectionImage.styles';
import { ContentSectionImageProps } from './ContentSectionImage.types';

export default function ContentSectionImage({
  contentSectionImg,
  onPress,
  style,
}: ContentSectionImageProps) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.imageContainer, style]}>
      <Image source={contentSectionImg} style={styles.image} />
    </TouchableOpacity>
  );
}
