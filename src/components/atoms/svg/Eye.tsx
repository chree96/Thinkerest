import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Eye(props: any) {
  const width = props?.width || 18;
  const color = props?.fill || '#FFF';

  return (
    <Svg
      width={width}
      height={width}
      fill={color}
      viewBox="0 0 16 16"
      {...props}>
      <Path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
      <Path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
    </Svg>
  );
}

export default Eye;
