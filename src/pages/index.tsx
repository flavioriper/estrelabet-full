import { useEffect, useState } from 'react';

import Results from '@/components/Results';
import Setup from '@/components/Setup';

const Index = () => {
  const [results, setResults]: any = useState([]);

  const fetchData = async () => {
    const response = await fetch('api/py/tipminer', {
      headers: { 'Access-Control-Allow-Origin': '*' },
    });

    const data = await response.json();
    setResults((value: any) => (value.find(({ id }: any) => id === data.id) ? value : [data, ...value]));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      fetchData();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-row gap-5">
      <div className="hidden bg-slate-400 text-white text-blue-500 text-purple-500 bg-green-200 text-pink-500" />
      <div>
        <Results data={results} />
      </div>
      <div>
        <Setup />
      </div>
    </div>
  );
};

export default Index;
