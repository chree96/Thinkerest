import React, { useCallback } from 'react';
import { Text, View } from 'react-native';
import { styles } from './ReviewItem.styles';
import ImageCircleContainer from '../../atoms/image-circle-container';
import StarRating from '../star-rating';
import { getReviewActions } from './utils';
import { ReviewItemProps } from './ReviewItem.types';

export default function ReviewItem({
  user,
  userImg,
  review,
  style,
}: ReviewItemProps) {
  const ReviewActions = useCallback(() => getReviewActions(), []);

  return (
    <View style={[styles.container, style]}>
      <View style={styles.infoReviewContainer}>
        <View style={styles.upperContainer}>
          <View style={styles.infoAndButtonsContainer}>
            <ImageCircleContainer
              img={{ uri: userImg }}
              style={styles.imgStyle}
              width={38}
            />
            <Text style={styles.userText}>{user}</Text>
          </View>
          <View style={styles.buttonsRow}>
            <ReviewActions />
          </View>
        </View>
        <View style={styles.dateAndRatingContainer}>
          <StarRating rating={3} starSize={10} style={styles.starRating} />
          <Text style={styles.dateText}>10/12/2022</Text>
        </View>
      </View>
      <View style={styles.reviewContainer}>
        <Text style={styles.reviewText}>{review}</Text>
      </View>
    </View>
  );
}
