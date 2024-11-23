const Setup = () => {
  return (
    <table className="table-auto border-collapse border border-slate-400">
      <tbody>
        <tr>
          <th className="border border-slate-300 bg-slate-200 py-1 px-3">Alarme</th>
          <th className="border border-slate-300 bg-slate-200 py-1 px-3">Vela Principal</th>
          <th className="border border-slate-300 bg-slate-200 py-1 px-3">Vocalização</th>
          <th className="border border-slate-300 bg-slate-200 py-1 px-3">Repetição</th>
          <th className="border border-slate-300 bg-slate-200 py-1 px-3">Limite H</th>
        </tr>
        <tr>
          <td className="border border-slate-300 py-1 px-3 text-center">Sim</td>
          <td className="border border-slate-300 py-1 px-3 text-center">R$ 1,50</td>
          <td className="border border-slate-300 py-1 px-3 text-center">Fair</td>
          <td className="border border-slate-300 py-1 px-3 text-center">Não</td>
          <td className="border border-slate-300 py-1 px-3 text-center">60%</td>
        </tr>
        <tr>
          <th className="border border-slate-300 bg-slate-200 py-1 px-3">Porcentagem</th>
          <th className="border border-slate-300 bg-slate-200 py-1 px-3">Vela Proteção</th>
          <th className="border border-slate-300 bg-slate-200 py-1 px-3">Maior que</th>
          <th className="border border-slate-300 bg-slate-200 py-1 px-3">Linhas</th>
          <th className="border border-slate-300 bg-slate-200 py-1 px-3">Limite I</th>
        </tr>
        <tr>
          <td className="border border-slate-300 py-1 px-3 text-center">60%</td>
          <td className="border border-slate-300 py-1 px-3 text-center">R$ 1,50</td>
          <td className="border border-slate-300 py-1 px-3 text-center">50,00x</td>
          <td className="border border-slate-300 py-1 px-3 text-center">00:01:02</td>
          <td className="border border-slate-300 py-1 px-3 text-center">70%</td>
        </tr>
        <tr>
          <th className="border border-slate-300 bg-slate-200 py-1 px-3">Limite distância</th>
          <th className="border border-slate-300 bg-slate-200 py-1 px-3">83,75%</th>
          <th className="border border-slate-300 bg-slate-200 py-1 px-3">3</th>
          <th className="border border-slate-300 bg-slate-200 py-1 px-3">93</th>
          <th className="border border-slate-300 bg-slate-200 py-1 px-3">Limite J</th>
        </tr>
        <tr>
          <td className="border border-slate-300 py-1 px-3 text-center">2</td>
          <td className="border border-slate-300 py-1 px-3 text-center">-R$ 141,30</td>
          <td className="border border-slate-300 py-1 px-3 text-center">R$ 225,00</td>
          <td className="border border-slate-300 py-1 px-3 text-center">R$ 83,70</td>
          <td className="border border-slate-300 py-1 px-3 text-center">70%</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Setup;
