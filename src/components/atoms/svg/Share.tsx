import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Share(props: any) {
  const width = props?.width || 64;
  const color = props?.fill || '#000';
  return (
    <Svg height={width} viewBox="0 0 64 64" width={width} {...props}>
      <Path
        fill={color}
        d="M48 39.26a8.3 8.3 0 00-6.033 2.596L24.23 33.172c.061-.408.103-.821.103-1.246 0-.414-.04-.818-.098-1.215l17.711-8.589A8.302 8.302 0 0048 24.741a8.333 8.333 0 10-8.333-8.333c0 .414.04.817.098 1.215l-17.711 8.589A8.3 8.3 0 0016 23.593a8.333 8.333 0 00-8.333 8.333A8.332 8.332 0 0016 40.259a8.3 8.3 0 006.033-2.596l17.737 8.684a8.378 8.378 0 00-.103 1.246c0 4.603 3.731 8.333 8.333 8.333s8.333-3.73 8.333-8.333A8.333 8.333 0 0048 39.26z"
      />
    </Svg>
  );
}

export default Share;
