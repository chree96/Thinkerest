import { ShareInfo } from '../../molecules/user-share-info/UserShareInfo.types';

export interface PostProps {
  postData: {
    contentImg: any;
    genre: string;
    review: string;
  };
  userData: ShareInfo;
  contentColor: string;
  onPress: () => void;
  onCommentPress: () => void;
  onSharePress: () => void;
  onWatchListPress: () => void;
  style?: any;
}

export enum PostAction {
  SHARE = 'SHARE',
  WATCH_LIST = 'WATCH_LIST',
  COMMENT = 'COMMENT',
}
