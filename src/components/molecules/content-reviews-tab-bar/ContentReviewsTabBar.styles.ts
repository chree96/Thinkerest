import { StyleSheet } from 'react-native';
import { colors } from '../../../styles';

export const styles = StyleSheet.create({
  tabBarContainer: {
    flex: 1,
    height: 40,
    backgroundColor: colors.darkGrey,
    marginTop: 20,
    alignSelf: 'center',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tabBarCustom: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  buttonContainer: {
    paddingHorizontal: 12,
    height: 28,
    borderRadius: 10,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
