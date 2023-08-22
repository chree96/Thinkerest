import { StyleSheet } from 'react-native';
import { colors, families, sizes } from '../../../styles';

export const styles = StyleSheet.create({
  container: {
    paddingTop: 4,
  },
  title: {
    fontFamily: families.bold,
    fontSize: sizes.smallish,
    color: colors.whiteSmoke,
  },
  plot: {
    fontFamily: families.light,
    fontSize: sizes.smallish,
    color: colors.whiteSmoke,
  },
});
