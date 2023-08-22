export interface DetailShareDataProps {
  data: {
    title: string;
    genre: string;
    year: number;
    duration: string;
  };
  style?: any;
}

export interface ContentDetailActions {
  action: string;
  icon: string;
  iconSize?: number;
}
