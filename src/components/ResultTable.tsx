import { SymbolData } from "../common/types";
import { addCommasToNumber } from "../utils/helpers";

type ResultTableProps = {
  data?: SymbolData[]
}

const ResultTable = ({ data }: ResultTableProps) => {
  if (!data) return
  return (
    <div className="w-3/4">
      <h2 className="text-2xl font-semibold mb-2">Output:</h2>
      <table className="w-3/4">
        <thead>
          <tr>
            <th>Symbol Name</th>
            <th>Unrealized Total ($)</th>
            <th>Realized Total ($)</th>
            <th>Total ($)</th>
          </tr>
        </thead>
        <tbody className="text-center">
            {data?.map((log) => {
              return (
                <tr key={log.symbol} className="border-b-1 leading-10">
                  <td>{log.symbol}</td>
                  <td>{addCommasToNumber(log.unrealizedTotal)}</td>
                  <td>{addCommasToNumber(log.realizedTotal)}</td>
                  <td>{addCommasToNumber(log.total)}</td>
                </tr>
              )
            })}
            <tr className="border-t-1 leading-10 italic font-semibold">
              <td>Total</td>
              <td>{(addCommasToNumber(Number(data.reduce((sum, log) => sum + log.unrealizedTotal, 0).toFixed(2))))}</td>
              <td>{(addCommasToNumber(Number(data.reduce((sum, log) => sum + log.realizedTotal, 0).toFixed(2))))}</td>
              <td>{(addCommasToNumber(Number(data.reduce((sum, log) => sum + log.total, 0).toFixed(2))))}</td>
            </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ResultTable;