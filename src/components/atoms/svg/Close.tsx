import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Close(props: any) {
  const width = props?.width || 22;
  const color = props?.fill || '#FFF';

  return (
    <Svg
      width={width}
      height={width}
      fill={color}
      viewBox="0 0 48 48"
      {...props}>
      <Path d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z" />
    </Svg>
  );
}

export default Close;
