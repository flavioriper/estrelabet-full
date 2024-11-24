declare module 'react-reveal/Fade';

export type IResult = {
  id: string;
  numericResult: number;
  time: string;
  distance?: number;
  green?: boolean;
};

export type IGame = 'estrelabet' | 'betfair' | 'betnacional' | 'b2xbet';
