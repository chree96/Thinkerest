import React from 'react';
import { colors } from '../../../styles';
import ButtonWithIcon from '../../atoms/button-with-icon';

const reviewActions: { action: string; icon: string; iconSize: number }[] = [
  { action: 'chat', icon: 'speechBubble', iconSize: 28 },
  { action: 'like', icon: 'cloud', iconSize: 20 },
  { action: 'more', icon: 'dots', iconSize: 20 },
];

export const getReviewActions = () =>
  reviewActions.map((item, key) => (
    <ButtonWithIcon
      noBackgroundColor
      iconColor={colors.solidWhite}
      iconName={item.icon}
      width={item?.iconSize || 26}
      iconSize={item?.iconSize || 24}
      onPress={() => console.log(item.action)}
      key={key}
    />
  ));
