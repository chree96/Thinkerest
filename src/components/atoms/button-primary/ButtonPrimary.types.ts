import { StyleProp, ViewStyle } from 'react-native';

export interface ButtonPrimaryProps {
  text?: string;
  iconName?: string;
  iconColor?: string;
  iconSize?: number;
  isDisabled?: boolean;
  style?: StyleProp<ViewStyle>;
  disabledStyle?: StyleProp<ViewStyle>;
  onPress: () => void;
  onPressDisabled?: () => void;
}
