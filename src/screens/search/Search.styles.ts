import { StyleSheet } from 'react-native';
import { colors, families } from '../../styles';

export const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: colors.solidBlack,
  },
  pillButtonsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: 12,
  },
  loaderContainer: {
    justifyContent: 'center',
  },
  listContainer: {
    flex: 1,
    backgroundColor: colors.solidBlack,
  },
  searchedContentContainer: {
    borderBottomWidth: 0.2,
    borderBottomColor: colors.doveGrey,
    paddingVertical: 10,
    backgroundColor: 'transparent',
  },
  searchedContentText: {
    textAlign: 'center',
    fontFamily: families.regular,
    color: colors.whiteSmoke,
  },
  contentContainer: {
    marginTop: 8,
  },
});
