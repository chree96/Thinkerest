import React from 'react';
import { Text, View } from 'react-native';
import { colors, sizes } from '../../../styles';
import { styles } from './IconWithText.styles';
import IconSvg from '../../atoms/icons-svg';
import { IconWithTextProps } from './IconWithText.types';

export default function IconWithText({
  svgName,
  text,
  svgColor,
  width,
  style,
  textStyle,
}: IconWithTextProps) {
  return (
    <View style={[styles.container, style]}>
      <IconSvg
        iconName={svgName}
        color={svgColor || colors.mineShaft}
        width={width || sizes.large}
      />
      <Text style={[styles.iconText, textStyle]}>{text}</Text>
    </View>
  );
}
