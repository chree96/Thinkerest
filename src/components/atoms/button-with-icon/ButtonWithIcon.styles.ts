import { StyleSheet } from 'react-native';
import { colors } from '../../../styles';

export const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 100,
    backgroundColor: colors.mineShaft,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noBackground: {
    backgroundColor: 'transparent',
  },
  backgroundWithOpacity: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
});
