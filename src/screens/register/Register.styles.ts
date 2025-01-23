import { StyleSheet } from 'react-native';
import { colors, families, sizes } from '../../styles';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.solidBlack,
    flexGrow: 1,
  },
  contentContainer: {
    flexGrow: 1,
  },
  inputContainer: {
    height: 50,
    borderRadius: 8,
    width: '100%',
    backgroundColor: colors.darkGrey,
    paddingHorizontal: 12,
    marginTop: 8,
    justifyContent: 'center',
  },
  inputText: {
    fontFamily: families.regular,
    fontSize: sizes.small,
    color: colors.lightGrey,
  },
  placeholder: {
    color: colors.doveGrey,
  },
  noMargin: {
    marginTop: 0,
  },
  textContainer: {
    paddingTop: 16,
    paddingBottom: 24,
  },
  pwdInputContainer: {
    flex: undefined,
    width: '100%',
    height: 50,
    paddingLeft: 8,
    paddingRight: 0,
    marginTop: 8,
    backgroundColor: colors.darkGrey,
  },
  title: {
    fontFamily: families.bold,
    fontSize: sizes.larger,
    color: colors.solidWhite,
  },
  description: {
    fontFamily: families.light,
    fontSize: sizes.smallish,
    color: colors.solidWhite,
    marginTop: 8,
  },
  listContainer: {
    paddingHorizontal: 16,
  },
  btnContainer: {
    position: 'absolute',
    bottom: 0,
    marginTop: 'auto',
    width: '100%',
    marginBottom: 24,
  },
  listFooter: {
    flexGrow: 1,
    paddingBottom: 200,
  },
});
