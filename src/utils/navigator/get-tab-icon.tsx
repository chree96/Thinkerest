import React from 'react';
import ImageCircleContainer from '../../components/atoms/image-circle-container';
import { Cloud, HomeIcon, LensPlus, Timer } from '../../components/atoms/svg';
import { colors } from '../../styles';
import { Screen } from '../../constants/Screen';

export default function tabIcon(
  route: any,
  focused: boolean,
  contentColor: string,
) {
  const iconInactiveColor = colors.lightGrey;
  const iconColor = focused ? contentColor : iconInactiveColor;

  switch (route.name) {
    case Screen.Home:
      return <HomeIcon fill={iconColor} />;
    case Screen.Search:
      return <LensPlus fill={iconColor} width={32} />;
    case Screen.ContentDetail:
      return <Timer fill={iconColor} width={24} />;
    case Screen.ContentDetail:
      return <Timer fill={iconColor} />;
    case Screen.Notifications:
      return <Cloud fill={iconColor} width={30} />;
    case Screen.Profile:
      return (
        <ImageCircleContainer
          img={require('../../../assets/images/mockImages/lello.jpg')}
          width={30}
        />
      );
  }
}
