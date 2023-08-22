import { StyleSheet } from 'react-native';
import { colors, families, sizes } from '../../../styles';

export const styles = StyleSheet.create({
  starRateText: {
    fontFamily: families.bold,
    color: colors.whiteSmoke,
    fontSize: sizes.giant,
  },
  starRating: {
    justifyContent: 'flex-start',
    marginTop: 0,
  },
  detailText: {
    fontFamily: families.light,
    color: colors.whiteSmoke,
    fontSize: sizes.small,
    marginTop: 4,
  },
});
