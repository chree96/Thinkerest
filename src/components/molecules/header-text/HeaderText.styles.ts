import { StyleSheet } from 'react-native';
import { sizes, colors, families } from '../../../styles';

export const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  text: {
    fontFamily: families.bold,
    fontSize: sizes.cardTitle,
    color: colors.whiteSmoke,
  },
});
