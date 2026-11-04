import React, { useCallback } from 'react';
import { Text, View } from 'react-native';
import LinearGradient from '../../atoms/linear-gradient/LinearGradient';
import { styles } from './DetailBackgroundData.styles';
import { getDetailHeaderActions } from './utils';
import { DetailShareDataProps } from './DetailBackgroundData.types';

export default function DetailBackgroundData({
  data,
  style,
}: DetailShareDataProps) {
  const contentDetailActions = useCallback(() => getDetailHeaderActions(), []);

  return (
    <LinearGradient
      colors={['rgba(0, 0, 0, 0.0)', 'rgba(0,0,0, 1)']}
      style={[styles.obscuredView, style]}>
      <View style={styles.bottomContainer}>
        <View>
          <Text style={styles.title}>{data?.title}</Text>
          <Text style={styles.description}>
            {data?.year + ' · ' + data?.genre + ' · ' + data?.duration}
          </Text>
        </View>
        <View style={styles.buttonsContainer}>{contentDetailActions()}</View>
      </View>
    </LinearGradient>
  );
}
