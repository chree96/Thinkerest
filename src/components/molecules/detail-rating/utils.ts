import {
  ContentRating,
  Rating,
} from '../../../features/contents/contentsSlice.types';

const calculateGraphData = (data: Rating) => {
  const { ratings, totalRatings } = data || {};
  const graphData: number[] = ratings?.map(
    rating => (rating / totalRatings) * 100,
  );

  return graphData;
};

export const getGraphData = (ratingData: ContentRating) => {
  const { friends: friendsRatingData, people: peopleRatingData } =
    ratingData || {};

  const friendsData = calculateGraphData(friendsRatingData);
  const peopleData = calculateGraphData(peopleRatingData);

  return {
    friendsData,
    peopleData,
  };
};
