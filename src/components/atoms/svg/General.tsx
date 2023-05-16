import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';

function General(props: any) {
  const width = props?.width || 16;
  const color = props?.color || '#FFF';

  return (
    <Svg width={width} height={width} viewBox="0 0 16 16" {...props}>
      <G fill="none" fillRule="evenodd">
        <Path d="M-4-4h24v24H-4z" />
        <Path
          d="M0 .5V4l4-4H.5C.22 0 0 .22 0 .5zM12 0l4 4V.5c0-.28-.22-.5-.5-.5H12zm4 15.5V12l-4 4h3.5c.28 0 .5-.22.5-.5zM.5 16H4l-4-4v3.5c0 .28.22.5.5.5zM15 8c0-3.87-3.13-7-7-7S1 4.13 1 8s3.13 7 7 7 7-3.13 7-7zm-7 5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"
          fill={color}
        />
      </G>
    </Svg>
  );
}

export default General;
