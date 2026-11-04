import React, { useCallback } from 'react';
import { Image, Text, View, FlatList, ListRenderItemInfo } from 'react-native';
import { styles } from './DetailCredits.styles';
import { DetailCreditsProps } from './DetailCredits.types';
import { CastInfo } from '../../../features/contents/contentsSlice.types';

export default function DetailCredits({ credits, style }: DetailCreditsProps) {
  const renderCredits = useCallback(
    ({ item }: ListRenderItemInfo<CastInfo>) => (
      <View style={styles.creditContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: item?.image }}
            style={styles.image}
            resizeMethod={'scale'}
            resizeMode={'cover'}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.nameText}>{item?.name}</Text>
          <Text style={styles.characterText}>{item?.character}</Text>
        </View>
      </View>
    ),
    [],
  );

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.creditsTitle}>Credits</Text>
      <FlatList<CastInfo>
        data={credits}
        keyExtractor={(item, index) => 'credits-' + index}
        renderItem={renderCredits}
        horizontal
      />
    </View>
  );
}
