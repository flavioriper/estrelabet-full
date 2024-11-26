declare module 'react-reveal/Fade';

export type IResult = {
  id: string;
  alarm: boolean;
  numericResult: number;
  time: string;
  average_total: number;
  average_7: number;
  distance?: number;
  green?: boolean;
};

export type IGame = 'EST' | 'FAIR' | 'NAC' | 'PLAY';
