import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

const ControlsIcon = (props: any) => {
  const width = props?.width || 30;
  const color = props?.fill || '#000';

  return (
    <Svg
      width={width}
      height={width}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeLinecap="square"
      color={color}
      {...props}>
      <Circle cx={9} cy={6} r={2} fill={color} />
      <Path d="M4 6h3M11 6h9" />
      <Circle cx={9} cy={18} r={2} fill={color} />
      <Path d="M4 18h3M11 18h9" />
      <Circle cx={15} cy={12} r={2} fill={color} />
      <Path d="M4 12h9M17 12h3" />
    </Svg>
  );
};

export default ControlsIcon;
