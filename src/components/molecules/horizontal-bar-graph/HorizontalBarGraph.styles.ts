import { StyleSheet } from 'react-native';
import { colors, families, sizes } from '../../../styles';

export const styles = StyleSheet.create({
  container: {
    width: '68%',
    height: '100%',
  },
  ratingGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textValue: {
    fontFamily: families.regular,
    fontSize: sizes.extraSmall,
    color: colors.solidWhite,
    textAlign: 'right',
    width: 20,
  },
  bar: {
    width: '100%',
    height: 8,
    marginLeft: 8,
    borderRadius: 8,
    marginVertical: 4,
    backgroundColor: colors.darkGrey,
  },
  percentBar: {
    height: 8,
    borderRadius: 8,
  },
  graphContainer: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column-reverse',
  },
});
