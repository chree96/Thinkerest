import { StyleSheet } from 'react-native';
import { colors, families, sizes } from '../../../styles';

export const styles = StyleSheet.create({
  actionContainer: {
    width: '84%',
    paddingRight: 16,
  },
  userActionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userActionRow: {
    flexDirection: 'row',
  },
  userText: {
    fontFamily: families.bold,
    color: colors.whiteSmoke,
    fontSize: sizes.smallish,
    textAlignVertical: 'bottom',
  },
  actionText: {
    fontFamily: families.regular,
    fontSize: sizes.small,
    color: colors.doveGrey,
    textAlignVertical: 'bottom',
  },
  dateText: {
    fontFamily: families.light,
    fontSize: sizes.small,
    color: colors.doveGrey,
  },
  contentText: {
    fontFamily: families.regular,
    fontSize: sizes.smallish,
    textAlignVertical: 'center',
  },
  contentWithRateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    marginTop: 0,
  },
  infoContainer: {
    flexDirection: 'row',
    marginTop: 32,
    width: '100%',
    paddingLeft: 16,
  },
  imgStyle: {
    marginRight: 8,
    marginTop: 4,
  },
  txtStyle: {
    textAlignVertical: 'center',
  },
  iconContainer: {
    paddingRight: 4,
  },
});
