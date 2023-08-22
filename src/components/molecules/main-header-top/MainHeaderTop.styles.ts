import { StyleSheet } from 'react-native';
import { families, sizes, colors } from '../../../styles';

export const styles = StyleSheet.create({
  topHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.mattBlack,
    paddingLeft: 16,
    paddingRight: 2,
    paddingTop: 6,
  },
  topButtonsContainer: {
    flexDirection: 'row',
    marginRight: 8,
  },
  textLogo: {
    fontFamily: families.light,
    fontSize: sizes.medLarge,
    marginTop: 6,
  },
});
