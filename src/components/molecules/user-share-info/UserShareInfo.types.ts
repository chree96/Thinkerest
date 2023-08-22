import { ContentType } from '../../../types/content';

export interface ShareInfo {
  user: string;
  userImg: any;
  rating: number;
  contentTitle: string;
  contentType: ContentType;
}

export interface UserShareInfoProps {
  shareInfo: ShareInfo;
  textColor?: string;
  style?: any;
}
