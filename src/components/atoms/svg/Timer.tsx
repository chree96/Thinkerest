import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';

function Timer(props: any) {
  const width = props?.width || 30;
  const color = props?.fill || '#000';

  return (
    <Svg
      width={width}
      height={width}
      viewBox="0 0 32 32"
      xmlSpace="preserve"
      {...props}>
      <G
        fill="none"
        stroke={color}
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={2}>
        <Path d="M31 16c0 8.284-6.716 15-15 15S1 24.284 1 16 7.716 1 16 1c5.343 0 10.034 2.794 12.691 7" />
        <Path d="M29 0v8h-8M16 7v9h7" />
      </G>
    </Svg>
  );
}

export default Timer;
