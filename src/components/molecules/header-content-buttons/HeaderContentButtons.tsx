import React, { memo } from 'react';
import { Animated, FlatList } from 'react-native';
import { colors } from '../../../styles';
import { styles } from './HeaderContentButtons.styles';
import ButtonWithIcon from '../../atoms/button-with-icon';
import { useCallback } from 'react';
import { HeaderContentButtonsProps } from './HeaderContentButtons.types';
import { ContentType } from '../../../types/content';

const contentTypes = Object.keys(ContentType).filter(
  content => content !== ContentType.general,
);

const HeaderContentButtons = memo<HeaderContentButtonsProps>(
  ({ contentType, contentColor, setContentType, style }) => {
    const renderContentButtons = useCallback(
      ({ item }: { item: any }) => {
        const selectedContent = item === contentType;

        const iconColor = selectedContent ? contentColor : colors.whiteSmoke;

        const iconName =
          !selectedContent && item === ContentType.tvSeries
            ? item + 'Outline'
            : item;

        const iconSize = item === ContentType.games ? 32 : 28;

        return (
          <ButtonWithIcon
            iconName={iconName}
            iconColor={iconColor}
            iconSize={iconSize}
            noBackgroundColor
            style={styles.headerButton}
            onPress={() => setContentType(item as ContentType)}
          />
        );
      },
      [contentColor, contentType, setContentType],
    );

    return (
      <Animated.View
        style={[
          styles.buttonsContainer,
          { borderBottomColor: contentColor },
          style,
        ]}>
        <FlatList
          horizontal
          contentContainerStyle={styles.buttonsRow}
          data={contentTypes}
          renderItem={renderContentButtons}
          keyExtractor={item => item + '-button'}
        />
      </Animated.View>
    );
  },
);

export default HeaderContentButtons;
