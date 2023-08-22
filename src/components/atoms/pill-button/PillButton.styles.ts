import { StyleSheet } from 'react-native';
import { colors, families, sizes } from '../../../styles';

export const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 20,
    minWidth: 40,
    height: 32,
    paddingRight: 10,
    paddingLeft: 4,
    marginHorizontal: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconContainer: {
    borderRadius: 100,
    marginRight: 4,
    backgroundColor: colors.whiteSmoke,
    alignContent: 'center',
    alignItems: 'center',
    padding: 4,
    width: 25,
    height: 25,
  },
  text: {
    fontFamily: families.bold,
    fontSize: sizes.extraSmall,
  },
});
