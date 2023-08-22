import { ContentColor } from '../../../features/contents/contentsSlice.types';
import { ContentType } from '../../../types/content';

export interface HeaderContentButtonsProps {
  contentType: ContentType;
  contentColor: ContentColor;
  style?: any;
  setContentType: (payload: ContentType) => void;
}
