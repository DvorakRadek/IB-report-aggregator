import { SymbolData } from "../common/types";

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
            <th>Unrealized Total</th>
            <th>Realized Total</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody className="text-center">
            {data?.map((log) => {
              return (
                <tr key={log.symbol}>
                  <td>{log.symbol}</td>
                  <td>{log.unrealizedTotal}</td>
                  <td>{log.realizedTotal}</td>
                  <td>{log.total}</td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>
  );
};

export default ResultTable;