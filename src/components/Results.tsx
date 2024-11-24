import classNames from 'classnames';

import type { IResult } from '@/types';

import Spinner from './Spinner';

import { getLast } from '@/utils/getColors';

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
          <th className="border border-slate-300 bg-slate-200 py-1 px-3">G</th>
          <th className="border border-slate-300 bg-slate-200 py-1 px-3">R</th>
          <th className="border border-slate-300 bg-slate-200 py-1 px-3">D10</th>
          <th className="border border-slate-300 bg-slate-200 py-1 px-3">%RV</th>
          <th className="border border-slate-300 bg-slate-200 py-1 px-3">%RV</th>
          <th className="border border-slate-300 bg-slate-200 py-1 px-3">%RV</th>
          <th className="border border-slate-300 bg-slate-200 py-1 px-3">%</th>
          <th className="border border-slate-300 bg-slate-200 py-1 px-3">Alarme</th>
        </tr>
      </thead>
      <tbody>
        {lasts.map(({ id, numericResult, time, distance, green }: any) => (
          <tr key={id}>
            <td
              className={classNames('border border-slate-300 py-1 px-3 text-center font-bold', getLast(numericResult))}
            >
              {numericResult.toFixed(2)}
            </td>
            <td className="border border-slate-300 py-1 px-3 text-center">{time}</td>
            <td className="border border-slate-300 py-1 px-3 text-center">{green ? 'G' : ''}</td>
            <td className="border border-slate-300 py-1 px-3 text-center">{green ? '' : 'R'}</td>
            <td className="border border-slate-300 py-1 px-3 text-center">{distance}</td>
            <td className="border border-slate-300 py-1 px-3 text-center">66%</td>
            <td className="border border-slate-300 py-1 px-3 text-center">57%</td>
            <td className="border border-slate-300 py-1 px-3 text-center">57%</td>
            <td className="border border-slate-300 py-1 px-3 text-center">60%</td>
            <td className="border border-slate-300 py-1 px-3 text-center"></td>
          </tr>
        ))}
        <tr>
          <td className="border border-slate-300 py-1 px-3 text-center bg-red-500 text-white">
            {valueCheck.toFixed(2)}
          </td>
          <td className="border border-slate-300 py-1 px-3 text-center bg-red-500 text-white"></td>
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
        {data.map(({ id, numericResult, time, distance, green }) => (
          <tr key={id}>
            <td
              className={classNames('border border-slate-300 py-1 px-3 text-center font-bold', getLast(numericResult))}
            >
              {numericResult.toFixed(2)}
            </td>
            <td className="border border-slate-300 py-1 px-3 text-center">{time}</td>
            <td className="border border-slate-300 py-1 px-3 text-center">{green ? 'G' : ''}</td>
            <td className="border border-slate-300 py-1 px-3 text-center">{green ? '' : 'R'}</td>
            <td className="border border-slate-300 py-1 px-3 text-center">{distance}</td>
            <td className="border border-slate-300 py-1 px-3 text-center">66%</td>
            <td className="border border-slate-300 py-1 px-3 text-center">57%</td>
            <td className="border border-slate-300 py-1 px-3 text-center">57%</td>
            <td className="border border-slate-300 py-1 px-3 text-center">60%</td>
            <td className="border border-slate-300 py-1 px-3 text-center"></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Results;
