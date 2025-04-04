import { useEffect, useState } from "react";
import { StorageLog } from "../common/types";
import { saveData } from "../utils/handleData";

type ReportFormProps = {
  data?: string,
  setActiveLogId: (log: StorageLog['id']) => void,
  setLogs: (logs: StorageLog[]) => void,
}

const ReportForm = ({ data, setActiveLogId, setLogs }: ReportFormProps) => {
  const [textareaValue, setTextareaValue] = useState<string>(data || '');
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

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValue(e.target.value);
  }

  useEffect(() => {
    setTextareaValue(data || '');
  }, [data]);

  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-start items-start mb-4 bg-gray-300 rounded-xl mr-4 px-8 py-4">
      <h2 className="text-2xl font-semibold mb-2">Original input:</h2>
      <textarea
        name='textInput'
        className="border p-2 rounded-md"
        rows={10}
        cols={130}
        value={textareaValue}
        onChange={handleChange}
        />
        <div className="flex gap-4 my-4">
          <button
            className="border rounded-md py-1 px-2 ml-4 cursor-pointer font-semibold hover:bg-white"
            type="submit"
          >
              Submit
          </button>
          <button
            className="border rounded-md py-1 px-2 ml-4 cursor-pointer font-semibold hover:bg-white"
            type="reset"
            onClick={() => {
              setActiveLogId('');
              setTextareaValue('');
              }}
            >
              Clear
          </button>
        </div>
    </form>
    );
};

export default ReportForm;