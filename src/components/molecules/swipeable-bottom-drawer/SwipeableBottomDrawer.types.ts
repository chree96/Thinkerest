import { ReactNode } from 'react';
import { StyleProp, ViewProps, ViewStyle } from 'react-native';

export interface CardProps extends ViewProps {
  visible: boolean;
  closeAction: () => void;
  headerStyle?: ViewStyle;
  contentStyle?: StyleProp<ViewStyle>;
  fixedBottomComponentStyle?: StyleProp<ViewStyle> | StyleProp<ViewStyle>;
  contentContainerStyle?: ViewStyle;
  children?: ReactNode;
  headerComponent?: ReactNode;
  fixedBottomComponent?: ReactNode;
  renderFooter?: ReactNode;
  maxHeight?: number;
  scrollToTop?: boolean;
  scrollToEnd?: boolean;
  noHeaderShadow?: boolean;
  withScroll?: boolean;
  onModalHide?: () => void;
}
