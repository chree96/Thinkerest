import { StyleSheet } from 'react-native';
import { colors, families, sizes } from '../../../styles';

export const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
  creditContainer: {
    width: 100,
    height: 200,
    alignItems: 'center',
    marginRight: 30,
  },
  imageContainer: {
    width: '100%',
    height: '68%',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 6,
  },
  textContainer: {
    alignContent: 'center',
    alignItems: 'center',
  },
  nameText: {
    fontFamily: families.bold,
    color: colors.whiteSmoke,
    fontSize: sizes.smallish,
    textAlign: 'center',
  },
  characterText: {
    fontFamily: families.light,
    color: colors.whiteSmoke,
    fontSize: sizes.smallish,
    textAlign: 'center',
  },
  creditsTitle: {
    fontFamily: families.bold,
    color: colors.whiteSmoke,
    fontSize: sizes.cardTitle,
    paddingBottom: 4,
  },
});
