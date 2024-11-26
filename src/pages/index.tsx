import { useState } from 'react';

import Button from '@/components/Button';
import Game from '@/components/Game';

const Index = () => {
  const [game, setGame]: any = useState('EST');

  return (
    <div className="flex flex-col gap-5 max-w-[750px]">
      <div className="hidden bg-slate-400 text-white text-blue-500 text-purple-500 bg-green-200 text-pink-500" />

      <div className="flex flex-row w-full justify-between gap-5 my-4">
        <Button selected={game === 'EST'} onClick={() => setGame('EST')}>
          EST
        </Button>
        <Button selected={game === 'FAIR'} onClick={() => setGame('FAIR')}>
          FAIR
        </Button>
        <Button selected={game === 'NAC'} onClick={() => setGame('NAC')}>
          NAC
        </Button>
        <Button selected={game === 'PLAY'} onClick={() => setGame('PLAY')}>
          PLAY
        </Button>
      </div>

      {game === 'EST' && <Game game="EST" />}
      {game === 'FAIR' && <Game game="FAIR" />}
      {game === 'NAC' && <Game game="NAC" />}
      {game === 'PLAY' && <Game game="PLAY" />}
    </div>
  );
};

export default Index;
