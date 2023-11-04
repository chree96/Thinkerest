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
    height: 50,
    borderRadius: 8,
    width: '100%',
    backgroundColor: colors.darkGrey,
    paddingHorizontal: 12,
    color: colors.lightGrey,
  },
  btnContainer: {
    paddingTop: 24,
  },
  btnMargin: {
    marginTop: 12,
  },
});
