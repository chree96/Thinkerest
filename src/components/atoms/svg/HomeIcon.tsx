import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function HomeIcon(props: any) {
  const width = props?.width || 30;
  const color = props?.fill || '#000';
  return (
    <Svg width={width} height={width} viewBox="0 0 24 24" {...props}>
      <Path fill={'none'} d="M0 0h24v24H0z" />
      <Path
        fill={color}
        d="M21 20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.49a1 1 0 01.386-.79l8-6.222a1 1 0 011.228 0l8 6.222a1 1 0 01.386.79V20zm-2-1V9.978l-7-5.444-7 5.444V19h14z"
      />
    </Svg>
  );
}

export default HomeIcon;
