import { SymbolData } from "../common/types";
import { addCommasToNumber } from "../utils/helpers";

type ResultTableProps = {
  data?: SymbolData[]
}

const ResultTable = ({ data }: ResultTableProps) => {
  if (!data) return
  return (
    <div className="bg-[#272757] rounded-xl mr-8 px-8 py-4">
      <h2 className="text-2xl font-semibold">Output:</h2>
      <div className="mt-4">
        <table className="w-3/4 bg-[#8686AC] rounded-xl ">
          <thead>
            <tr>
              <th className="py-2">Symbol Name</th>
              <th className="py-2">Unrealized Total ($)</th>
              <th className="py-2">Realized Total ($)</th>
              <th className="py-2">Total ($)</th>
            </tr>
          </thead>
          <tbody className="text-center">
              {data?.map((log) => {
                return (
                  <tr key={log.symbol} className="leading-10 odd:bg-[#505081] hover:bg-[#0F0E47]">
                    <td>{log.symbol}</td>
                    <td>{addCommasToNumber(log.unrealizedTotal)}</td>
                    <td>{addCommasToNumber(log.realizedTotal)}</td>
                    <td>{addCommasToNumber(log.total)}</td>
                  </tr>
                )
              })}
              <tr className="border-t-1 leading-10 italic font-semibold hover:bg-[#0F0E47]">
                <td>Total</td>
                <td>{(addCommasToNumber(Number(data.reduce((sum, log) => sum + log.unrealizedTotal, 0).toFixed(2))))}</td>
                <td>{(addCommasToNumber(Number(data.reduce((sum, log) => sum + log.realizedTotal, 0).toFixed(2))))}</td>
                <td>{(addCommasToNumber(Number(data.reduce((sum, log) => sum + log.total, 0).toFixed(2))))}</td>
              </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResultTable;