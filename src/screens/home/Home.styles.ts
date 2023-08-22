import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

export const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    backgroundColor: colors.solidBlack,
  },
  listPaddingTop: {
    paddingTop: 60,
    alignContent: 'center',
  },
  filterButton: {
    backgroundColor: colors.whiteAlpha7,
    position: 'absolute',
    bottom: 40,
    right: 18,
  },
});
