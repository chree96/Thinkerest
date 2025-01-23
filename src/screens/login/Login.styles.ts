import { StyleSheet } from 'react-native';
import { colors, families, sizes } from '../../styles';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.solidBlack,
    paddingHorizontal: 16,
  },
  contentContainer: {
    flexGrow: 1,
  },
  loginContainer: {
    flex: 1,
  },
  logoContainer: {
    backgroundColor: colors.solidWhite,
    borderRadius: 10,
    width: '100%',
  },
  logo: {
    width: '100%',
    height: '100%',
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
  inputContainer: {
    height: 134,
    paddingTop: 16,
    justifyContent: 'space-between',
  },
  input: {
    flex: undefined,
    height: 50,
    borderRadius: 8,
    width: '100%',
    backgroundColor: colors.darkGrey,
    paddingHorizontal: 12,
    fontFamily: families.regular,
    fontSize: sizes.small,
    color: colors.lightGrey,
  },
  pwdInput: {
    paddingHorizontal: 0,
    flex: 1,
  },
  pwdInputContainer: {
    flex: undefined,
    width: '100%',
    height: 50,
    backgroundColor: colors.darkGrey,
    paddingRight: 0,
  },
  btnContainer: {
    paddingTop: 24,
  },
  btnMargin: {
    marginTop: 12,
  },
});
