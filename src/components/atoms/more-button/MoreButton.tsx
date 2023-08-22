import React, { useMemo } from 'react';
import { colors } from '../../../styles';
import { Text, TouchableOpacity } from 'react-native';
import styles from './MoreButton.styles';
import { MoreButtonProps } from './MoreButton.types';

export default function MoreButton({
  textColor = colors.whiteSmoke,
  isVisible,
  isShowingMore,
  style,
  onPress,
}: MoreButtonProps) {
  const buttonText = useMemo(
    () => (isShowingMore ? 'Hide review' : 'Show review'),
    [isShowingMore],
  );

  return isVisible ? (
    <TouchableOpacity onPress={onPress} style={style}>
      <Text style={[styles.logo, { color: textColor }]}>{buttonText}</Text>
    </TouchableOpacity>
  ) : null;
}
