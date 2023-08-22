import { UserPost } from './Home.types';

export const getMappedData = (post: UserPost) => {
  const {
    starRating,
    contentImg,
    title,
    genre,
    review,
    contentId,
    user,
    userImg,
    contentType,
    id,
  } = post;

  const postData = {
    contentImg: { uri: contentImg },
    genre,
    review,
    id,
    contentId,
  };

  const userData = {
    user,
    userImg: { uri: userImg },
    rating: starRating,
    contentTitle: title,
    contentType,
  };

  return { postData, userData };
};
