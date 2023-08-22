import { ReactFragment, ReactPortal } from 'react';

export interface IconsSvgProps {
  iconName?: any | null;
  SvgElement?: (props: any) => any | ReactFragment | ReactPortal;
  style?: any;
  color?: string | symbol;
  width?: number;
}
