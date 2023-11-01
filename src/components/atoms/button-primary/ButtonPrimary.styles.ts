import { StyleSheet } from 'react-native';
import { colors, families, sizes } from '../../../styles';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    borderRadius: 8,
    backgroundColor: '#0DF5E3',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontFamily: families.bold,
    fontSize: sizes.littleMedium,
    color: colors.solidWhite,
  },
});
