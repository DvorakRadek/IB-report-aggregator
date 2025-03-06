import { OutputData } from "../common/types";

type ResultTableProps = {
  data: OutputData[]
}

const ResultTable = ({ data }: ResultTableProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Symbol Name</th>
          <th>Unrealized Total</th>
          <th>Realized Total</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
          {data.map((log) => {
            return (
              <tr key={log.symbolName}>
                <td>{log.symbolName}</td>
                <td>{log.unrealizedTotal}</td>
                <td>{log.realizedTotal}</td>
                <td>{log.total}</td>
              </tr>
            )
          })}
      </tbody>
    </table>
  );
};

export default ResultTable;