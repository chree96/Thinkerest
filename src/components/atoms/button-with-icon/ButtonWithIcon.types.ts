export interface ButtonWithIconProps {
  iconName: string;
  iconColor?: string;
  iconSize?: number;
  width?: number | string;
  noBackgroundColor?: boolean;
  backgroundWithOpacity?: boolean;
  style?: any;
  onPress: () => void;
}
