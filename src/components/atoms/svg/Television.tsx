import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Television(props: any) {
  const width = props?.width || 28;
  const color = props?.fill || '#000';
  return (
    <Svg width={width} height={width} viewBox="0 0 16 16" {...props}>
      <Path
        fill={color}
        fillRule="evenodd"
        d="M2.5 13.5A.5.5 0 013 13h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5zM2 2h12s2 0 2 2v6s0 2-2 2H2s-2 0-2-2V4s0-2 2-2z"
      />
    </Svg>
  );
}

export default Television;
