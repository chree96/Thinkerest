import { ReactNode } from 'react';

export interface IconsSvgProps {
  iconName?: any | null;
  SvgElement?: (props: any) => ReactNode;
  style?: any;
  color?: string | symbol;
  width?: number;
}
