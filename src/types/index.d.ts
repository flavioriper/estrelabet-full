declare module 'react-reveal/Fade';

export type IResult = {
  id: string;
  numericResult: number;
  time: string;
  average_total: number;
  average_2: number;
  average_5: number;
  average_7: number;
  distance?: number;
  green?: boolean;
};

export type IGame = 'estrelabet' | 'betfair' | 'betnacional' | 'b2xbet';
