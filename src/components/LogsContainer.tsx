import { Report } from "../common/types";
import Log from "./Log";

type LogsContainerProps = {
  logs: Report[],
}

const LogsContainer = ({ logs }: LogsContainerProps) => {
  return (
    <section>
      <ul>
        {logs.map((log) => (
          <li key={log.id}>
            <Log log={log} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LogsContainer;