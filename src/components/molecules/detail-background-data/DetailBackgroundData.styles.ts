import { StyleSheet } from 'react-native';
import { colors, families, sizes } from '../../../styles';

export const styles = StyleSheet.create({
  obscuredView: {
    width: '100%',
    height: 120,
    position: 'absolute',
    bottom: 0,
    zIndex: 9,
    paddingHorizontal: 12,
    paddingBottom: 16,
    justifyContent: 'flex-end',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: families.bold,
    color: colors.whiteSmoke,
    fontSize: sizes.medLarge,
  },
  description: {
    fontFamily: families.light,
    fontSize: sizes.smallish,
    color: colors.lightGrey,
    marginTop: 2,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  iconMargin: {
    marginLeft: 4,
  },
});
