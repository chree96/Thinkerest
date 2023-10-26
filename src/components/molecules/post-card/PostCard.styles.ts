import { StyleSheet } from 'react-native';
import { colors, families, sizes } from '../../../styles';

export const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 10,
    flexShrink: 1,
    flexDirection: 'column',
    alignSelf: 'center',
    borderColor: colors.lightGrey,
    borderWidth: 0.5,
  },
  contentContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  imgContainer: {
    height: '100%',
    width: '100%',
  },
  imgStyle: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  contentInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderColor: colors.lightGrey,
    borderBottomWidth: 0.5,
  },
  reviewContainer: {
    minHeight: 10,
    height: 100,
    width: '100%',
    backgroundColor: 'red',
    marginLeft: '18%',
    paddingTop: 6,
    paddingHorizontal: 12,
  },
  reviewText: {
    fontFamily: families.light,
    color: colors.whiteSmoke,
    fontSize: sizes.small,
  },
  moreButton: {
    paddingTop: 6,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingRight: 4,
  },
  buttonIconText: {
    fontFamily: families.bold,
    fontSize: 12,
    color: colors.doveGrey,
    textAlignVertical: 'bottom',
  },
});
