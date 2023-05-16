import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Hamburger(props: any) {
  const width = props?.width || 35;
  const color = props?.fill || '#000';
  return (
    <Svg width={width} height={width} viewBox="0 0 64 64" {...props}>
      <Path
        fill={color}
        stroke={color}
        strokeWidth={2}
        strokeMiterlimit={10}
        d="M12 21h40M12 33h40M12 45h40"
      />
    </Svg>
  );
}

export default Hamburger;
