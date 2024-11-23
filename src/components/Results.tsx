const Results = ({ data }: any) => {
  return (
    <table className="table-auto border-collapse border border-slate-400">
      <thead>
        <tr>
          <th className="border border-slate-300 bg-slate-200 py-1 px-3">Últimas</th>
          <th className="border border-slate-300 bg-slate-200 py-1 px-3">Vela</th>
          <th className="border border-slate-300 bg-slate-200 py-1 px-3">Hora</th>
          <th className="border border-slate-300 bg-slate-200 py-1 px-3">G</th>
          <th className="border border-slate-300 bg-slate-200 py-1 px-3">R</th>
          <th className="border border-slate-300 bg-slate-200 py-1 px-3">D10</th>
          <th className="border border-slate-300 bg-slate-200 py-1 px-3">Repetição</th>
          <th className="border border-slate-300 bg-slate-200 py-1 px-3">%RV</th>
          <th className="border border-slate-300 bg-slate-200 py-1 px-3">%RV</th>
          <th className="border border-slate-300 bg-slate-200 py-1 px-3">%RV</th>
          <th className="border border-slate-300 bg-slate-200 py-1 px-3">%</th>
          <th className="border border-slate-300 bg-slate-200 py-1 px-3">Alarme</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-slate-300 py-1 px-3 text-center">13,54</td>
          <td className="border border-slate-300 py-1 px-3 text-center">8</td>
          <td className="border border-slate-300 py-1 px-3 text-center">09:10:06</td>
          <td className="border border-slate-300 py-1 px-3 text-center"></td>
          <td className="border border-slate-300 py-1 px-3 text-center"></td>
          <td className="border border-slate-300 py-1 px-3 text-center">4</td>
          <td className="border border-slate-300 py-1 px-3 text-center"></td>
          <td className="border border-slate-300 py-1 px-3 text-center">66%</td>
          <td className="border border-slate-300 py-1 px-3 text-center">57%</td>
          <td className="border border-slate-300 py-1 px-3 text-center">57%</td>
          <td className="border border-slate-300 py-1 px-3 text-center">60%</td>
          <td className="border border-slate-300 py-1 px-3 text-center"></td>
        </tr>
        <tr>
          <td className="border border-slate-300 py-1 px-3 text-center bg-red-500 text-white">54,83</td>
          <td className="border border-slate-300 py-1 px-3 text-center bg-red-500 text-white">2,04</td>
          <td className="border border-slate-300 py-1 px-3 text-center bg-red-500 text-white"></td>
          <td className="border border-slate-300 py-1 px-3 text-center bg-red-500 text-white">45</td>
          <td className="border border-slate-300 py-1 px-3 text-center bg-red-500 text-white">48</td>
          <td className="border border-slate-300 py-1 px-3 text-center bg-red-500 text-white"></td>
          <td className="border border-slate-300 py-1 px-3 text-center bg-red-500 text-white"></td>
          <td className="border border-slate-300 py-1 px-3 text-center bg-red-500 text-white"></td>
          <td className="border border-slate-300 py-1 px-3 text-center bg-red-500 text-white"></td>
          <td className="border border-slate-300 py-1 px-3 text-center bg-red-500 text-white"></td>
          <td className="border border-slate-300 py-1 px-3 text-center bg-red-500 text-white"></td>
          <td className="border border-slate-300 py-1 px-3 text-center bg-red-500 text-white"></td>
        </tr>
        {data.map(({ id, numericResult, time }: any) => (
          <tr key={id}>
            <td className="border border-slate-300 py-1 px-3 text-center">{numericResult}</td>
            <td className="border border-slate-300 py-1 px-3 text-center">8</td>
            <td className="border border-slate-300 py-1 px-3 text-center">{time}</td>
            <td className="border border-slate-300 py-1 px-3 text-center"></td>
            <td className="border border-slate-300 py-1 px-3 text-center"></td>
            <td className="border border-slate-300 py-1 px-3 text-center">4</td>
            <td className="border border-slate-300 py-1 px-3 text-center"></td>
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
