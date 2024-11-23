import classNames from 'classnames';

import { getLast } from '@/utils/getColors';

const Results = ({ data }: any) => {
  const lasts = data.filter(({ numericResult }: any) => numericResult >= 10).slice(0, 7);

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
        {lasts.map(({ id, numericResult, time, distance }: any) => (
          <tr key={id}>
            <td className={classNames('border border-slate-300 py-1 px-3 text-center', getLast(numericResult))}>
              {numericResult}
            </td>
            <td className="border border-slate-300 py-1 px-3 text-center">{time}</td>
            <td className="border border-slate-300 py-1 px-3 text-center"></td>
            <td className="border border-slate-300 py-1 px-3 text-center"></td>
            <td className="border border-slate-300 py-1 px-3 text-center">{distance}</td>
            <td className="border border-slate-300 py-1 px-3 text-center">66%</td>
            <td className="border border-slate-300 py-1 px-3 text-center">57%</td>
            <td className="border border-slate-300 py-1 px-3 text-center">57%</td>
            <td className="border border-slate-300 py-1 px-3 text-center">60%</td>
            <td className="border border-slate-300 py-1 px-3 text-center"></td>
          </tr>
        ))}
        <tr>
          <td className="border border-slate-300 py-1 px-3 text-center bg-red-500 text-white">0,00</td>
          <td className="border border-slate-300 py-1 px-3 text-center bg-red-500 text-white"></td>
          <td className="border border-slate-300 py-1 px-3 text-center bg-red-500 text-white">0</td>
          <td className="border border-slate-300 py-1 px-3 text-center bg-red-500 text-white">0</td>
          <td className="border border-slate-300 py-1 px-3 text-center bg-red-500 text-white"></td>
          <td className="border border-slate-300 py-1 px-3 text-center bg-red-500 text-white"></td>
          <td className="border border-slate-300 py-1 px-3 text-center bg-red-500 text-white"></td>
          <td className="border border-slate-300 py-1 px-3 text-center bg-red-500 text-white"></td>
          <td className="border border-slate-300 py-1 px-3 text-center bg-red-500 text-white"></td>
          <td className="border border-slate-300 py-1 px-3 text-center bg-red-500 text-white"></td>
        </tr>
        {data.map(({ id, numericResult, time, distance }: any) => (
          <tr key={id}>
            <td className={classNames('border border-slate-300 py-1 px-3 text-center', getLast(numericResult))}>
              {numericResult}
            </td>
            <td className="border border-slate-300 py-1 px-3 text-center">{time}</td>
            <td className="border border-slate-300 py-1 px-3 text-center"></td>
            <td className="border border-slate-300 py-1 px-3 text-center"></td>
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
