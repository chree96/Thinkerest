import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './HeaderText.styles';
import { HeaderTextProps } from './HeaderText.types';

export default function HeaderText({ text, style }: HeaderTextProps) {
  return (
    <View style={style}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}
