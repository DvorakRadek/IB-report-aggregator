import { Report } from "../common/types";
import LogButton from "./LogButton";

type LogProps = {
  log: Report,
}

const Log = ({ log }: LogProps) => {
  return (
    <div>
      {log.id}
      <LogButton label="show" onClick={() => {}} />
      <LogButton label="delete" onClick={() => {}} />
    </div>
  );
};

export default Log;