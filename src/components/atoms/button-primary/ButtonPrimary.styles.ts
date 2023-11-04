import { StyleSheet } from 'react-native';
import { colors, families, sizes } from '../../../styles';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    borderRadius: 8,
    backgroundColor: colors.brightTurquoise,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  outlineContainer: {
    backgroundColor: 'transparent',
    borderWidth: 3,
    borderColor: colors.brightTurquoise,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontFamily: families.bold,
    fontSize: sizes.littleMedium,
    color: colors.solidBlack,
  },
  outlineText: {
    color: colors.brightTurquoise,
  },
});
