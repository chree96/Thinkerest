import React, { useId } from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, {
  Defs,
  LinearGradient as SvgLinearGradient,
  Rect,
  Stop,
} from 'react-native-svg';
import { LinearGradientProps } from './LinearGradient.types';
import { getStopColor } from './LinearGradient.utils';

export default function LinearGradient({
  colors,
  children,
  pointerEvents,
  style,
  start = { x: 0.5, y: 0 },
  end = { x: 0.5, y: 1 },
}: LinearGradientProps) {
  const gradientId = `svg-gradient-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;

  return (
    <View pointerEvents={pointerEvents} style={style}>
      <Svg
        pointerEvents="none"
        style={StyleSheet.absoluteFill}
        width="100%"
        height="100%"
      >
        <Defs>
          <SvgLinearGradient
            id={gradientId}
            x1={`${start.x * 100}%`}
            y1={`${start.y * 100}%`}
            x2={`${end.x * 100}%`}
            y2={`${end.y * 100}%`}
          >
            {colors.map((value, index) => {
              const { color, opacity } = getStopColor(value);
              const offset =
                colors.length > 1 ? (index / (colors.length - 1)) * 100 : 0;

              return (
                <Stop
                  key={`${index}-${value}`}
                  offset={`${offset}%`}
                  stopColor={color}
                  stopOpacity={opacity}
                />
              );
            })}
          </SvgLinearGradient>
        </Defs>
        <Rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill={`url(#${gradientId})`}
        />
      </Svg>
      {children}
    </View>
  );
}
