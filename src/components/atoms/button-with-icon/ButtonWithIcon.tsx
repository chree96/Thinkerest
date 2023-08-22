import React, { useMemo } from 'react';
import { colors, shadows } from '../../../styles';
import { styles } from './ButtonWithIcon.styles';
import IconSvg from '../icons-svg';
import { TouchableOpacity } from 'react-native';
import { ButtonWithIconProps } from './ButtonWithIcon.types';

export default function ButtonWithIcon({
  iconName,
  iconColor = colors.whiteSmoke,
  iconSize,
  width = 40,
  noBackgroundColor,
  backgroundWithOpacity,
  style,
  onPress,
}: ButtonWithIconProps) {
  const touchableStyle = useMemo(() => {
    const outStyle: any = [
      styles.buttonContainer,
      {
        width: width,
        height: width,
      },
    ];

    if (!(noBackgroundColor || backgroundWithOpacity)) {
      outStyle.push(shadows.medium);
    } else if (noBackgroundColor) {
      outStyle.push(styles.noBackground);
    } else if (backgroundWithOpacity) {
      outStyle.push(styles.backgroundWithOpacity);
    }

    outStyle.push(style);

    return outStyle;
  }, [backgroundWithOpacity, noBackgroundColor, style, width]);

  return (
    <TouchableOpacity onPress={onPress} style={touchableStyle}>
      <IconSvg iconName={iconName} color={iconColor} width={iconSize || 28} />
    </TouchableOpacity>
  );
}
