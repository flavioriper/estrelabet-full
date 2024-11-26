import { useEffect, useState } from 'react';

import Results from '@/components/Results';

import type { IGame, IResult } from '@/types';

const Game = ({ game = 'EST' }: { game: IGame }) => {
  const [results, setResults]: any = useState([]);

  const fetchAllData = async () => {
    const response = await fetch(`api/py/tipminer/all?game=${game}`, {
      headers: { 'Access-Control-Allow-Origin': '*' },
    });

    const data = await response.json();
    setResults(data);
  };

  const fetchIntervalData = async () => {
    const response = await fetch(`api/py/tipminer/last?game=${game}`, {
      headers: { 'Access-Control-Allow-Origin': '*' },
    });

    const data = await response.json();
    if (data.id) {
      setResults((value: IResult[]) => (value.find(({ id }) => id === data.id) ? value : [data, ...value]));
    }
  };

  useEffect(() => {
    fetchAllData();

    const interval = setInterval(() => {
      fetchIntervalData();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return <Results data={results} />;
};

export default Game;
