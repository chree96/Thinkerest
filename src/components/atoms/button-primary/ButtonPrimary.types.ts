import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface ButtonPrimaryProps {
  text?: string;
  textColor?: string;
  buttonColor?: string;
  isOutlineStyle?: boolean;
  iconName?: string;
  iconColor?: string;
  iconSize?: number;
  isDisabled?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  disabledStyle?: StyleProp<ViewStyle>;
  onPress: () => void;
  onPressDisabled?: () => void;
}
