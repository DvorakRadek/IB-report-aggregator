import { StorageLog } from "../common/types";
import { deleteData } from "../utils/handleData";
import { getCZDateFormat } from "../utils/helpers";
import LogButton from "./LogButton";

type LogsContainerProps = {
  logs: StorageLog[],
  setActiveLogId: (log: StorageLog['id']) => void,
  setLogs: (logs: StorageLog[]) => void,
}

const LogsContainer = ({ logs, setActiveLogId, setLogs }: LogsContainerProps) => {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-2">Logs:</h2>
      <ul>
        {logs?.map((log: StorageLog) => (
          <li key={log.id}>
            <div className="mt-2">
              {getCZDateFormat(new Date(log.id).toISOString())}
              <LogButton label="show" onClick={() => {setActiveLogId(log.id)}} />
              <LogButton label="delete" onClick={() => {
                const updatedLogs = deleteData(log.id);
                setLogs(updatedLogs)
                setActiveLogId('');
                }} />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LogsContainer;