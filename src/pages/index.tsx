import { useState } from 'react';

import Button from '@/components/Button';
import Game from '@/components/Game';

const Index = () => {
  const [game, setGame]: any = useState('estrelabet');

  return (
    <div className="flex flex-col gap-5">
      <div className="hidden bg-slate-400 text-white text-blue-500 text-purple-500 bg-green-200 text-pink-500" />

      <div className="flex flex-row gap-5 m-4">
        <Button selected={game === 'estrelabet'} onClick={() => setGame('estrelabet')}>
          EST
        </Button>
        <Button selected={game === 'betfair'} onClick={() => setGame('betfair')}>
          FAIR
        </Button>
        <Button selected={game === 'betnacional'} onClick={() => setGame('betnacional')}>
          NAC
        </Button>
        <Button selected={game === 'b2xbet'} onClick={() => setGame('b2xbet')}>
          PLAY
        </Button>
      </div>

      {game === 'estrelabet' && <Game game="estrelabet" />}
      {game === 'betfair' && <Game game="betfair" />}
      {game === 'betnacional' && <Game game="betnacional" />}
      {game === 'b2xbet' && <Game game="b2xbet" />}
    </div>
  );
};

export default Index;
