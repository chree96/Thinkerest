import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Dots = (props: any) => {
  const width = props?.width || 35;
  const color = props?.fill || '#000';

  return (
    <Svg
      viewBox="0 0 256 256"
      fill={color}
      width={width}
      height={width}
      {...props}>
      <Path fill="none" d="M0 0h256v256H0z" />
      <Path d="M156 128a28 28 0 1 1-28-28 28.1 28.1 0 0 1 28 28Zm-28-52a28 28 0 1 0-28-28 28.1 28.1 0 0 0 28 28Zm0 104a28 28 0 1 0 28 28 28.1 28.1 0 0 0-28-28Z" />
    </Svg>
  );
};

export default Dots;
