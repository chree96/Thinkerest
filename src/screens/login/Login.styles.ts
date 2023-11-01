import { StyleSheet } from 'react-native';
import { colors, families, sizes } from '../../styles';

export const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: colors.solidBlack,
    paddingHorizontal: 16,
  },
  logoContainer: {
    flex: 0.4,
    backgroundColor: 'red',
  },
  loginContainer: {
    flex: 0.3,
    backgroundColor: 'black',
  },
  descriptionContainer: {
    backgroundColor: 'black',
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
    flex: 0.4,
    backgroundColor: 'red',
  },
  input: {
    height: 50,
    borderRadius: 8,
    width: '100%',
    backgroundColor: colors.darkGrey,
    marginTop: 16,
    paddingHorizontal: 12,
    color: colors.lightGrey,
  },
});
