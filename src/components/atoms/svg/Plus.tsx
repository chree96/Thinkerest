import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Plus = (props: any) => {
  const color = props?.fill || '#FFF';
  const width = props?.width || 32;

  return (
    <Svg height={width} width={width} viewBox={'0 0 32 32'} {...props}>
      <Path
        fill={color}
        d="M28 14H18V4a2 2 0 0 0-4 0v10H4a2 2 0 0 0 0 4h10v10a2 2 0 0 0 4 0V18h10a2 2 0 0 0 0-4z"
      />
    </Svg>
  );
};

export default Plus;
