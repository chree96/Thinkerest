import { ContentColor } from '../../../features/contents/contentsSlice.types';
import { ContentType } from '../../../types/content';

export interface SearchHeaderProps {
  contentType: ContentType;
  contentColor: ContentColor;
  setContentType: (payload: ContentType) => void;
  searchContent: (payload: string) => void;
  isHiddenHeader: boolean;
  style?: any;
}
