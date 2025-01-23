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
    marginBottom: 12,
  },
});
