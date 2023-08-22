import { StyleSheet } from 'react-native';
import { colors } from '../../../styles';

export const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    maxHeight: 140,
    backgroundColor: colors.mattBlack,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 999,
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 4,
    backgroundColor: colors.mattBlack,
    marginTop: 18,
  },
  textInputContainer: {
    flex: 1,
    height: 42,
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 12,
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
