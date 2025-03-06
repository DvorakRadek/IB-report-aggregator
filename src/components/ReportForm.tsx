import { Report } from "../common/types";

type ReportFormProps = {
  data: Report,
}

const ReportForm = ({ data }: ReportFormProps) => {
  console.log(data);
  return (
    <form>
      <label htmlFor="report">Original report</label>
      <input type="textarea" />
      <button>Submit</button>
    </form>
  );
};

export default ReportForm;