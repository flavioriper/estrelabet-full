import type { IResult } from '@/types';

import Result from './Result';
import Spinner from './Spinner';

type Types = {
  data: IResult[];
};

const Results = ({ data }: Types) => {
  const lasts = data
    .filter(({ numericResult }) => numericResult >= 10)
    .slice(0, 7)
    .reverse();
  const valueCheck = 2.3;

  if (data.length === 0)
    return (
      <div className="m-3">
        <Spinner />
      </div>
    );

  return (
    <table className="table-auto border-collapse border border-slate-400">
      <thead>
        <tr>
          <th className="border border-slate-300 bg-slate-200 py-1 px-3">Vela</th>
          <th className="border border-slate-300 bg-slate-200 py-1 px-3">Hora</th>
          <th className="border border-slate-300 bg-slate-200 py-1 px-3">Green</th>
          <th className="border border-slate-300 bg-slate-200 py-1 px-3">Pink</th>
          <th className="border border-slate-300 bg-slate-200 py-1 px-3">Red</th>
          <th className="border border-slate-300 bg-slate-200 py-1 px-3">D10</th>
          <th className="border border-slate-300 bg-slate-200 py-1 px-3">%RV</th>
          <th className="border border-slate-300 bg-slate-200 py-1 px-3">%RV</th>
          <th className="border border-slate-300 bg-slate-200 py-1 px-3">%RV</th>
          <th className="border border-slate-300 bg-slate-200 py-1 px-3">%</th>
          <th className="border border-slate-300 bg-slate-200 py-1 px-3">Alarme</th>
        </tr>
      </thead>
      <tbody>
        <Result data={lasts} />
        <tr>
          <td className="border border-slate-300 py-1 px-3 text-center bg-red-500 text-white">
            {valueCheck.toFixed(2)}
          </td>
          <td className="border border-slate-300 py-1 px-3 text-center bg-red-500 text-white"></td>
          <td className="border border-slate-300 py-1 px-3 text-center bg-red-500 text-white">
            {data.filter(({ green }) => green).length}
          </td>
          <td className="border border-slate-300 py-1 px-3 text-center bg-red-500 text-white">
            {data.filter(({ green }) => green).length}
          </td>
          <td className="border border-slate-300 py-1 px-3 text-center bg-red-500 text-white">
            {data.filter(({ green }) => !green).length}
          </td>
          <td className="border border-slate-300 py-1 px-3 text-center bg-red-500 text-white"></td>
          <td className="border border-slate-300 py-1 px-3 text-center bg-red-500 text-white"></td>
          <td className="border border-slate-300 py-1 px-3 text-center bg-red-500 text-white"></td>
          <td className="border border-slate-300 py-1 px-3 text-center bg-red-500 text-white"></td>
          <td className="border border-slate-300 py-1 px-3 text-center bg-red-500 text-white"></td>
          <td className="border border-slate-300 py-1 px-3 text-center bg-red-500 text-white"></td>
        </tr>
        <Result data={data} />
      </tbody>
    </table>
  );
};

export default Results;
