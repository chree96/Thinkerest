export interface PostCardProps {
  postData: {
    contentImg: any;
    genre: string;
    review: string;
  };
  contentColor: string;
  onPress: () => void;
  onCommentPress: () => void;
  onSharePress: () => void;
  onWatchListPress: () => void;
  style?: any;
}
