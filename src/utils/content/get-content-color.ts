import { colors } from '../../styles';
import { ContentType } from '../../types/content';

const getContentColor = (content: ContentType) => {
  switch (content) {
    case ContentType.movies:
      return colors.cherryRed;
    case ContentType.tvSeries:
      return colors.robinsEggBlue;
    case ContentType.games:
      return colors.electricViolet;
    case ContentType.books:
      return colors.yellow;
    case ContentType.music:
      return colors.green;
    default:
      return colors.whiteSmoke;
  }
};

export default getContentColor;
