import React, { useMemo } from 'react';
import { Text, View } from 'react-native';
import { styles } from './DetailRating.styles';
import RatingBox from '../rating-box';
import HorizontalBarGraph from '../horizontal-bar-graph';
import { getGraphData } from './utils';
import { DetailRatingProps } from './DetailRating.types';

export default function DetailRating({
  rate,
  ratingData,
  contentColor,
  style,
}: DetailRatingProps) {
  const graphData = useMemo(() => getGraphData(ratingData), [ratingData]);

  return (
    <View style={[styles.container, style]}>
      <View style={styles.titleGrid}>
        <Text style={styles.titleText}>{'Rating & reviews'}</Text>
      </View>
      <View style={styles.graphGrid}>
        <RatingBox rate={rate} ratingData={ratingData} />
        <HorizontalBarGraph
          graphData={graphData?.friendsData}
          contentColor={contentColor}
          style={styles.barGraph}
        />
      </View>
    </View>
  );
}
