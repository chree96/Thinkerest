import { ContentType } from '../../types/content';

export interface HomeProps {
  navigation: any;
}

export interface UserPost {
  id: string;
  user: string;
  userImg: any;
  contentType: ContentType;
  starRating: number;
  contentImg: any;
  title: string;
  contentId: string;
  genre: string;
  review: string;
}
