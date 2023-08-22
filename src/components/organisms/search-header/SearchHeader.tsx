import React, { memo, useEffect, useMemo, useState } from 'react';
import { Animated, TextInput, View } from 'react-native';
import { colors } from '../../../styles';
import { styles } from './SearchHeader.styles';
import HeaderContentButtons from '../../molecules/header-content-buttons';
import { Lens } from '../../atoms/svg';
import ButtonWithIcon from '../../atoms/button-with-icon';
import { SearchHeaderProps } from './SearchHeader.types';
import { ContentType } from '../../../types/content';
import {
  getSearchHeaderAnimationStyles,
  startCollapse,
} from '../../../utils/header/search-header-animation';

const SearchHeader = memo<SearchHeaderProps>(
  ({
    contentType,
    contentColor,
    isHiddenHeader,
    setContentType,
    searchContent,
    style,
  }) => {
    const [isPeopleSearch, setIsPeopleSearch] = useState(false);

    const peopleIconColor = useMemo(
      () => (isPeopleSearch ? colors.whiteSmoke : colors.solidBlack),
      [isPeopleSearch],
    );

    const canSearch = useMemo(
      () => contentType !== ContentType.general || isPeopleSearch,
      [contentType, isPeopleSearch],
    );

    const { transformHeaderCollapse } = useMemo(
      () => getSearchHeaderAnimationStyles(),
      [],
    );

    useEffect(() => {
      startCollapse(isHiddenHeader);
    }, [isHiddenHeader]);

    return (
      <Animated.View
        style={[styles.headerContainer, transformHeaderCollapse, style]}>
        <View style={styles.searchContainer}>
          <View style={styles.textInputContainer}>
            <Lens width={22} fill={contentColor} />
            <TextInput
              placeholder="Cerca per titolo"
              onChangeText={(value: string) => searchContent(value)}
              placeholderTextColor={colors.shadowLight}
              selectionColor={contentColor}
              style={styles.textInput}
              showSoftInputOnFocus={canSearch}
            />
            <ButtonWithIcon
              iconName={'people'}
              onPress={() => setIsPeopleSearch(!isPeopleSearch)}
              iconColor={peopleIconColor}
              iconSize={30}
              noBackgroundColor
            />
          </View>
        </View>
        <HeaderContentButtons
          contentType={contentType}
          contentColor={contentColor}
          setContentType={setContentType}
        />
      </Animated.View>
    );
  },
);

export default SearchHeader;
