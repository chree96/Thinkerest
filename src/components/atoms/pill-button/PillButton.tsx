import React, { useMemo } from 'react';
import { Touchable } from 'react-native-gesture-handler';
import { colors, shadows } from '../../../styles';
import { styles } from './PillButton.styles';
import IconSvg from '../icons-svg';
import { Text, View } from 'react-native';
import { getSecondaryContentColor } from './utils';
import { PillButtonProps } from './PillButton.types';

export default function PillButton({
  iconName,
  iconSize,
  color = colors.solidBlack,
  contentType,
  text,
  style,
  onPress,
}: PillButtonProps) {
  const bgColor = useMemo(
    () =>
      contentType ? getSecondaryContentColor(contentType) : colors.whiteSmoke,
    [contentType],
  );

  return (
    <Touchable
      activeOpacity={0.2}
      animationDuration={{ in: 0, out: 150 }}
      onPress={onPress}
      style={[
        styles.buttonContainer,
        shadows.medium,
        { backgroundColor: bgColor },
        style,
      ]}>
      <View style={styles.iconContainer}>
        <IconSvg iconName={iconName} color={color} width={iconSize || 25} />
      </View>
      <Text style={[styles.text, { color: color }]}>{text}</Text>
    </Touchable>
  );
}
