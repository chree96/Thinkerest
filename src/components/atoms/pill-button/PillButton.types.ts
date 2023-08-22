import { ContentType } from '../../../types/content';

export interface PillButtonProps {
  iconName: string;
  iconSize?: number;
  color?: string;
  contentType?: ContentType;
  text: string;
  style?: any;
  onPress: () => void;
}
