import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './HorizontalBarGraph.styles';
import { HorizontalBarGraphProps } from './HorizontalBarGraph.types';

export default function HorizontalBarGraph({
  graphData,
  contentColor,
  style,
}: HorizontalBarGraphProps) {
  const renderGraphData = (percentValue: number, value: number) => {
    const graphWidth = percentValue.toFixed(0) + '%';

    return (
      <View style={styles.ratingGrid} key={'bar-' + value}>
        <Text style={styles.textValue}>{value}</Text>
        <View style={styles.bar}>
          <View
            style={[
              styles.percentBar,
              {
                width: graphWidth,
                backgroundColor: contentColor,
              },
            ]}
          />
        </View>
      </View>
    );
  };

  return graphData?.length ? (
    <View style={[styles.container, style]}>
      {graphData?.map((item, index) => renderGraphData(item, index + 1))}
    </View>
  ) : null;
}
