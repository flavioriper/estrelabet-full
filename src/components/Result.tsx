import classNames from 'classnames';

import type { IResult } from '@/types';

import { getLast } from '@/utils/getColors';

type Types = {
  data: IResult[];
};

const Result = ({ data }: Types) => {
  return (
    <>
      {data.map(({ alarm, id, average_7, average_total, numericResult, time, distance, green }) => (
        <tr key={id}>
          <td className={classNames('border border-slate-300 py-1 px-3 text-center font-bold', getLast(numericResult))}>
            {numericResult.toFixed(2)}
          </td>
          <td className="border border-slate-300 py-1 px-3 text-center">{time}</td>
          <td className="border border-slate-300 py-1 px-3 text-center">{green ? 'G' : ''}</td>
          <td className="border border-slate-300 py-1 px-3 text-center">{green ? '' : 'P'}</td>
          <td className="border border-slate-300 py-1 px-3 text-center">{green ? '' : 'R'}</td>
          <td className="border border-slate-300 py-1 px-3 text-center font-bold">{distance}</td>
          <td className="border border-slate-300 py-1 px-3 text-center">{Math.round(average_7 * 100)}%</td>
          <td className="border border-slate-300 py-1 px-3 text-center">{Math.round(average_7 * 100)}%</td>
          <td className="border border-slate-300 py-1 px-3 text-center">{Math.round(average_7 * 100)}%</td>
          <td className="border border-slate-300 py-1 px-3 text-center">{Math.round(average_total * 100)}%</td>
          <td className="border border-slate-300 py-1 px-3 text-center">{alarm ? 'VERDADEIRO' : 'FALSO'}</td>
        </tr>
      ))}
    </>
  );
};

export default Result;
