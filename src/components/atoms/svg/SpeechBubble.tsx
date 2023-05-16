import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SpeechBubble(props: any) {
  const width = props?.width || 35;
  const color = props?.fill || '#000';

  return (
    <Svg
      height={width}
      width={width}
      viewBox={'0 -8 35 35'}
      fill={color}
      {...props}>
      <Path d="M0 0h24v24H0V0z" fill="none" />
      <Path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
    </Svg>
  );
}

export default SpeechBubble;
