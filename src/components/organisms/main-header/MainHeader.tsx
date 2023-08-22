import React, { memo, useEffect, useMemo } from 'react';
import { Animated } from 'react-native';
import { styles } from './MainHeader.styles';
import {
  getHeaderAnimationStyles,
  startCollapse,
} from '../../../utils/header/header-animation';
import HeaderContentButtons from '../../molecules/header-content-buttons';
import MainHeaderTop from '../../molecules/main-header-top';
import { MainHeaderProps } from './MainHeader.types';

const MainHeader = memo<MainHeaderProps>(
  ({ contentType, contentColor, setContentType, isHiddenHeader, style }) => {
    const { transformHeaderCollapse, transformContent } = useMemo(
      () => getHeaderAnimationStyles(),
      [],
    );

    useEffect(() => {
      startCollapse(isHiddenHeader);
    }, [isHiddenHeader]);

    return (
      <Animated.View
        style={[styles.headerContainer, transformHeaderCollapse, style]}>
        <MainHeaderTop color={contentColor} />

        <HeaderContentButtons
          contentType={contentType}
          contentColor={contentColor}
          setContentType={setContentType}
          style={transformContent}
        />
      </Animated.View>
    );
  },
);

export default MainHeader;
