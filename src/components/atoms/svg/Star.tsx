import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Star(props: any) {
  const width = props?.width || 35;
  const color = props?.fill || '#000';
  return (
    <Svg width={width} height={width} viewBox="0 0 30 30" {...props}>
      <Path
        fill={color}
        d="M15.765 2.434l2.875 8.512 8.983.104c.773.009 1.093.994.473 1.455l-7.207 5.364 2.677 8.576c.23.738-.607 1.346-1.238.899L15 22.147l-7.329 5.196c-.63.447-1.468-.162-1.238-.899l2.677-8.576-7.207-5.364c-.62-.461-.3-1.446.473-1.455l8.983-.104 2.875-8.512c.248-.732 1.284-.732 1.531.001z"
      />
    </Svg>
  );
}

export default Star;
