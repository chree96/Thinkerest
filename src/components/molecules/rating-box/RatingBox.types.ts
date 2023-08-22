import { ContentRating } from '../../../features/contents/contentsSlice.types';

export interface RatingBoxProps {
  rate: number;
  ratingData: ContentRating;
  style?: any;
}
