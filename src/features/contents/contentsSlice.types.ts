import { ContentType } from '../../types/content';

export interface ContentsState {
  contentType: ContentType;
  contentColor: ContentColor;
  isLoading: boolean;
  foregroundContents: ForegroundContent;
}

export enum ContentColor {
  general = '#F5F5F5', // whiteSmoke
  movies = '#ec2426', //cherryRed
  tvSeries = '#00CCCC', //robinsEggBlue
  games = '#A733FF', // electricViolet
  books = '#FEDF01', // yellow
  music = '#00cc00', // green
}

export interface ForegroundContent {
  general: {
    topRated?: any;
    recommended?: any;
    byGenre?: any;
  };
  movies: {
    topRated?: SearchSectionContent[];
    recommended?: SearchSectionContent[];
    byGenre?: ContentByGenre;
  };
  tvSeries: {
    topRated?: any;
    recommended?: any;
    byGenre?: any;
  };
  games: {
    topRated?: any;
    recommended?: any;
    byGenre?: any;
  };
  books: {
    topRated?: any;
    recommended?: any;
    byGenre?: any;
  };
  music: {
    topRated?: any;
    recommended?: any;
    byGenre?: any;
  };
}

export interface ContentByGenre {
  action: SearchSectionContent[];
  adventure: SearchSectionContent[];
  romantic: SearchSectionContent[];
}

export interface SearchSectionContent {
  id: string;
  image: {
    height: number;
    width: number;
    id: string;
    url: string;
  };
  runningTimeInMinutes?: number;
  title: string;
  contentType: ContentType;
  year: number;
}

export interface ContentDetails extends SearchSectionContent {
  genre: string;
  peopleShare: number;
  friendsShare: number;
  peopleRate: number;
  friendRate: number;
  plot: string;
  runTime: number;
  releaseData: string;
  credits: CastInfo[];
  rating: ContentRating;
}

export interface CastInfo {
  name: string;
  image: string;
  character: string;
}

export interface ContentReview {
  user: string;
  userImg: string;
  review: string;
}
export interface Rating {
  ratings: number[];
  totalRatings: number;
}

export interface ContentRating {
  people: Rating;
  friends: Rating;
}
