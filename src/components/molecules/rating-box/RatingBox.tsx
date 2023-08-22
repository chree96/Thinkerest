import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './RatingBox.styles';
import StarRating from '../star-rating';
import { RatingBoxProps } from './RatingBox.types';

export default function RatingBox({ rate, style }: RatingBoxProps) {
  return (
    <View style={style}>
      <Text style={styles.starRateText}>{rate}</Text>
      <StarRating rating={rate} starSize={14} style={styles.starRating} />
      <Text style={styles.detailText}>{'2123 reviews'}</Text>
    </View>
  );
}
