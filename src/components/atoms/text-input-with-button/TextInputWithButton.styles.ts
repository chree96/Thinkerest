import { StyleSheet } from 'react-native';
import { colors } from '../../../styles';

export const styles = StyleSheet.create({
  textInputContainer: {
    flex: 1,
    height: 42,
    alignItems: 'center',
    flexDirection: 'row',
    color: colors.shadowLight,
    backgroundColor: colors.mineShaft,
    borderRadius: 10,
    paddingHorizontal: 12,
  },
  textInput: {
    flex: 1,
    color: colors.shadowLight,
  },
  inputStyle: {
    marginTop: 5,
    color: colors.shadowLight,
  },
});
