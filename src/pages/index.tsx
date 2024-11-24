import { useEffect, useState } from 'react';

import Results from '@/components/Results';
// import Setup from '@/components/Setup';

import type { IResult } from '@/types';

const Index = () => {
  const [results, setResults]: any = useState([]);

  const fetchAllData = async () => {
    const response = await fetch('api/py/tipminer/all', {
      headers: { 'Access-Control-Allow-Origin': '*' },
    });

    const data = await response.json();
    setResults(data.map((result: IResult) => ({ ...result, green: result.numericResult > 2.3 })));
  };

  const fetchIntervalData = async () => {
    const response = await fetch('api/py/tipminer/last', {
      headers: { 'Access-Control-Allow-Origin': '*' },
    });

    const data = await response.json();
    data.green = data.numericResult > 2.3;
    setResults((value: IResult[]) => (value.find(({ id }) => id === data.id) ? value : [data, ...value]));
  };

  useEffect(() => {
    fetchAllData();

    const interval = setInterval(() => {
      fetchIntervalData();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-row gap-5">
      <div className="hidden bg-slate-400 text-white text-blue-500 text-purple-500 bg-green-200 text-pink-500" />
      <div>
        <Results data={results} />
      </div>
      {/* <div>
        <Setup />
      </div> */}
    </div>
  );
};

export default Index;
