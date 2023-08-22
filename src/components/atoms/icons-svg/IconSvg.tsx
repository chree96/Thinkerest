import React from 'react';
import { View } from 'react-native';
import styles from './IconsSvg.style';
import { getSvgIconList } from './utils/get-svg-icon-list';
import { IconsSvgProps } from './IconSvg.types';

const IconSvg = ({
  iconName,
  SvgElement,
  style,
  color,
  width,
  ...props
}: IconsSvgProps) => {
  const renderImage = () => {
    if (SvgElement) {
      return (
        <View style={styles.svgIcon}>
          <SvgElement
            style={[styles.svgStyle, style]}
            color={color}
            width="100%"
            height="100%"
            {...props}
          />
        </View>
      );
    } else if (iconName) {
      const iconList = getSvgIconList(width, color);
      const Icon = iconList[iconName];

      return (
        <View style={[style, styles.svgStyle]} {...props}>
          {Icon}
        </View>
      );
    }
  };
  return <View>{renderImage()}</View>;
};

export default IconSvg;
