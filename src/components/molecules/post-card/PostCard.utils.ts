import { PostAction } from '../../organisms/post/Post.types';

export const getActionIcon = (action: PostAction) => {
  switch (action) {
    case PostAction.COMMENT:
      return 'cloud';
    case PostAction.WATCH_LIST:
      return 'moreTime';
    case PostAction.SHARE:
      return 'share';
  }
};

export const getPostActionFn = (
  action: PostAction,
  actionFunctions: {
    onCommentPress: () => void;
    onSharePress: () => void;
    onWatchListPress: () => void;
  },
) => {
  const { onCommentPress, onSharePress, onWatchListPress } = actionFunctions;

  switch (action) {
    case PostAction.COMMENT:
      return onCommentPress;
    case PostAction.WATCH_LIST:
      return onWatchListPress;
    case PostAction.SHARE:
      return onSharePress;
  }
};
