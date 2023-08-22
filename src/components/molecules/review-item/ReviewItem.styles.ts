import { StyleSheet } from 'react-native';
import { colors, families, sizes } from '../../../styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 8,
    padding: 16,
    paddingRight: 0,
    marginVertical: 10,
    marginHorizontal: 8,
    borderRadius: 10,
    borderBottomColor: colors.doveGrey,
    borderBottomWidth: 0.2,
  },
  upperContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  infoAndButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  userInfo: {
    marginTop: 0,
    marginLeft: 0,
    paddingRight: 16,
  },
  reviewContainer: {
    paddingRight: 16,
    paddingBottom: 16,
  },
  infoReviewContainer: {
    paddingBottom: 12,
  },
  imgStyle: {
    marginRight: 8,
    marginTop: 8,
  },
  userText: {
    fontFamily: families.bold,
    color: colors.whiteSmoke,
    paddingLeft: 4,
  },
  buttonsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  reviewText: {
    fontFamily: families.light,
    color: colors.whiteSmoke,
    fontSize: sizes.small,
    lineHeight: 18,
  },
  actionButton: {
    marginRight: 0,
    alignSelf: 'flex-end',
  },
  dateText: {
    fontFamily: families.light,
    color: colors.whiteSmoke,
    fontSize: sizes.extraSmall,
    paddingLeft: 4,
    textAlignVertical: 'bottom',
  },
  dateAndRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 12,
  },
  starRating: {
    marginTop: 0,
  },
});
