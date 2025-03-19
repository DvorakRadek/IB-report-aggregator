import { StorageLog } from "../common/types";
import { saveData } from "../utils/handleData";

type ReportFormProps = {
  data?: string,
  setActiveLogId: (log: StorageLog['id']) => void,
  setLogs: (logs: StorageLog[]) => void,
}

const ReportForm = ({ data, setActiveLogId, setLogs }: ReportFormProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const textInput = formData.get('textInput') as string;
    if (textInput === '') return;
    const update = saveData(textInput);
    setLogs(update.currentLogs);
    setActiveLogId(update.newLog.id);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-start items-start mr-8 mb-8">
      <h2 className="text-2xl font-semibold mb-2">Original input:</h2>
      <textarea
        name='textInput'
        className="border p-2 rounded-md"
        rows={10}
        cols={150}
        defaultValue={data ?? ''}
        />
        <div className="flex gap-4 my-4">
          <button className="border rounded-md py-1 px-2 ml-4 cursor-pointer font-semibold" type="submit">Submit</button>
          <button className="border rounded-md py-1 px-2 ml-4 cursor-pointer font-semibold" type="reset" onClick={() => setActiveLogId('')}>Clear</button>
        </div>
    </form>
    );
};

export default ReportForm;