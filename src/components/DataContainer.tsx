import { useEffect, useState } from "react";
import ReportForm from "./ReportForm";
import { StorageLog } from "../common/types";
import ResultTable from "./ResultTable";
import LogsContainer from "./LogsContainer";
import { loadData } from "../utils/handleData";

const DataContainer = () => {
  const [report, setReport] = useState<StorageLog | undefined>(undefined);
  const [logs, setLogs] = useState<StorageLog[]>(() => loadData());
  const [activeLogId, setActiveLogId] = useState<StorageLog['id']>('');

  useEffect(() => {
    if (activeLogId) {
      setReport(logs.find((log) => log.id === activeLogId));
    } else setReport(undefined);
  }, [logs, activeLogId]);

  return (
    <section className="flex">
      <div>
        <ReportForm key={activeLogId} data={report?.inputData} setActiveLogId={setActiveLogId} setLogs={setLogs} />
        <ResultTable data={report?.outputData} />
      </div>
      <div>
        <LogsContainer logs={logs} setActiveLogId={setActiveLogId} setLogs={setLogs} />
      </div>
    </section>
  );
};

export default DataContainer;