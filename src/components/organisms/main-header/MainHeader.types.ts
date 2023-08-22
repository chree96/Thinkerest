import { StyleProp, ViewStyle } from 'react-native';
import { ContentColor } from '../../../features/contents/contentsSlice.types';
import { ContentType } from '../../../types/content';

export interface MainHeaderProps {
  contentType: ContentType;
  contentColor: ContentColor;
  setContentType: (payload: ContentType) => void;
  isHiddenHeader: boolean;
  style?: StyleProp<ViewStyle>;
}
