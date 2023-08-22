import { StyleProp, ViewStyle } from 'react-native';

export interface StarRatingProps {
  rating: number;
  starSize?: number;
  style?: StyleProp<ViewStyle>;
}
