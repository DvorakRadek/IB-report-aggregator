import { StorageLog } from "../common/types";
import { deleteData } from "../utils/handleData";
import LogButton from "./LogButton";

type LogsContainerProps = {
  logs: StorageLog[],
  setActiveLogId: (log: StorageLog['id']) => void,
  setLogs: (logs: StorageLog[]) => void,
}

const LogsContainer = ({ logs, setActiveLogId, setLogs }: LogsContainerProps) => {
  const reversedLogs = logs.slice().reverse();
  return (
    <section className="bg-gray-300 rounded-xl px-8 py-4">
      <h2 className="text-2xl font-semibold mb-2">Logs:</h2>
      <ul>
        {reversedLogs?.map((log: StorageLog) => (
          <li key={log.id} className="hover:bg-gray-200 rounded-xl">
            <div className="mt-2 flex justify-between items-center py-1 px-2">
              <span className="font-semibold mr-4">#{log.numberId}</span> {new Date(log.id).toLocaleString('cs-CZ')}
              <LogButton label="show" onClick={() => {setActiveLogId(log.id)}} />
              <LogButton label="delete" onClick={() => {
                const updatedLogs = deleteData(log.id);
                setLogs(updatedLogs)
                }} />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LogsContainer;