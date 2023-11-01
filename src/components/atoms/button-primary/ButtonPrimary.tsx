import React, { useCallback, useMemo } from 'react';
import { styles } from './ButtonPrimary.styles';
import IconSvg from '../icons-svg';
import { StyleProp, Text, TouchableOpacity, ViewStyle } from 'react-native';
import { ButtonPrimaryProps } from './ButtonPrimary.types';

export default function ButtonPrimary({
  text,
  iconName,
  iconColor,
  iconSize,
  isDisabled,
  style,
  disabledStyle,
  onPress,
  onPressDisabled,
}: ButtonPrimaryProps) {
  const btnStyle = useMemo(() => {
    let outStyle: StyleProp<ViewStyle> = [styles.container];

    if (iconName) {
      outStyle.push(styles.row);
    }

    if (style) {
      outStyle.push(style);
    }

    if (isDisabled && disabledStyle) {
      outStyle.push(disabledStyle);
    }

    return outStyle;
  }, [disabledStyle, iconName, isDisabled, style]);

  const onPressButton = useCallback(
    () => (isDisabled && onPressDisabled ? onPressDisabled() : onPress()),
    [isDisabled, onPress, onPressDisabled],
  );

  return (
    <TouchableOpacity
      onPress={() => onPressButton()}
      disabled={isDisabled}
      style={btnStyle}>
      {text ? <Text style={styles.text}>{text}</Text> : null}
      {iconName ? (
        <IconSvg iconName={iconName} color={iconColor} width={iconSize || 28} />
      ) : null}
    </TouchableOpacity>
  );
}
