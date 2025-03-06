import { useState } from "react";
import ReportForm from "./ReportForm";
import { Report } from "../common/types";
import mockData from "../common/mockData";
import ResultTable from "./ResultTable";
import LogsContainer from "./LogsContainer";

const DataContainer = () => {
  const [report] = useState<Report>(mockData[0]);

  return (
    <section>
      <div>
        <ReportForm data={report} />
        <ResultTable data={report.outputData} />
      </div>
      <div>
        <LogsContainer logs={mockData} />
      </div>

    </section>
  );
};

export default DataContainer;