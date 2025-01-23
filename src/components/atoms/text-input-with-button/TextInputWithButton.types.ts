import { StyleProp, TextInputProps, TextStyle, ViewStyle } from 'react-native';
import { Without } from '../../../types/without';

export interface TextInputWithButtonProps
  extends Without<TextInputProps, 'style'> {
  buttonIconName: string;
  buttonIconSize?: number;
  buttonIconColor?: string;
  iconName?: string;
  iconSize?: number;
  iconColor?: string;
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  onChangeText: (text: string) => void;
  onButtonPress: () => void;
}
