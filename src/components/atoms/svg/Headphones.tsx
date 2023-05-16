import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Headphones = (props: any) => {
  const color = props?.color || '#fff';
  const width = props?.width || 24;

  return (
    <Svg
      viewBox="0 0 512 512"
      fill={color}
      width={width}
      height={width}
      {...props}>
      <Path d="M469.33 291.73v-46.4C469.33 127.7 373.63 32 256 32S42.67 127.7 42.67 245.33v46.4A64 64 0 0 0 0 352v64a64.07 64.07 0 0 0 64 64h42.67A21.33 21.33 0 0 0 128 458.67V309.33A21.33 21.33 0 0 0 106.67 288H85.33v-42.67c0-94.1 76.56-170.67 170.67-170.67s170.67 76.56 170.67 170.67V288h-21.34A21.33 21.33 0 0 0 384 309.33v149.34A21.33 21.33 0 0 0 405.33 480H448a64.07 64.07 0 0 0 64-64v-64a64 64 0 0 0-42.67-60.27Z" />
    </Svg>
  );
};

export default Headphones;
