import { ReactNode } from 'react';
import { StyleProp, ViewProps, ViewStyle } from 'react-native';

export interface Point {
  x: number;
  y: number;
}

export interface LinearGradientProps {
  colors: string[];
  children?: ReactNode;
  pointerEvents?: ViewProps['pointerEvents'];
  style?: StyleProp<ViewStyle>;
  start?: Point;
  end?: Point;
}
