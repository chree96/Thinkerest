import React, { useMemo } from 'react';
import { View } from 'react-native';
import { colors, sizes } from '../../../styles';
import { Star } from '../../atoms/svg';
import { styles } from './StarRating.styles';
import { StarRatingProps } from './StarRating.types';

export default function StarRating({
  rating,
  starSize,
  style,
}: StarRatingProps) {
  const renderStarRating = useMemo(() => {
    let stars: any[] = [];
    for (let i = 1; i <= 5; i++) {
      const starColor = i <= rating ? colors.gold : colors.notSnowWhiteGray;
      stars.push(
        <View style={{ marginLeft: i === 1 ? 0 : 4 }} key={'star-' + i}>
          <Star fill={starColor} width={starSize || sizes.large} />
        </View>,
      );
    }
    return stars;
  }, [rating, starSize]);

  return <View style={[styles.starsContainer, style]}>{renderStarRating}</View>;
}
