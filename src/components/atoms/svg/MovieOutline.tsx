import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';

function MovieOutline(props: any) {
  const width = props?.width || 28;
  const height = width * 0.8;
  const color = props?.fill || '#000';

  return (
    <Svg width={width} height={height} viewBox="0 0 48 48" {...props}>
      <G fill="none" fillRule="evenodd">
        <Path d="M-2-4h24v24H-2z" />
        <Path
          d="M2 2.47L3.76 6H18v8H2V2.47zM20 0h-4l2 4h-3l-2-4h-2l2 4h-3L8 0H6l2 4H5L3 0H2C.9 0 .01.9.01 2L0 14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V0z"
          fill={color}
        />
      </G>
    </Svg>
  );
}

export default MovieOutline;
