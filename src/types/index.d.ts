declare module 'react-reveal/Fade';

export type IResult = {
  id: string;
  alarm: boolean;
  numericResult: number;
  time: string;
  distance?: number;
  green?: boolean;
  pink?: boolean;
  red?: boolean;
};

export type IGame = 'EST' | 'FAIR' | 'NAC' | 'PLAY';
