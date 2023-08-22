import { ContentRating } from '../../../features/contents/contentsSlice.types';

export interface DetailRatingProps {
  rate: number;
  ratingData: ContentRating;
  contentColor: string;
  style?: any;
}
