import { StorageLog } from "../common/types";
import { parseData } from "./parseData";

export const saveData = (input: string): {currentLogs: StorageLog[], newLog: StorageLog} => {
  const storageLogs = localStorage.getItem('storageLogs');
  const currentLogs = storageLogs ? JSON.parse(storageLogs) : [];
  const newNumberId = currentLogs.at(-1)?.numberId ? currentLogs.at(-1).numberId + 1 : 1;
  const newLog: StorageLog = {
    numberId: newNumberId,
    id: new Date().toString(),
    inputData: input,
    outputData: parseData(input),
  };
  currentLogs.push(newLog);
  localStorage.setItem('storageLogs', JSON.stringify(currentLogs));
  return {currentLogs, newLog};
};

export const loadData = () => {
  const storageLogs = localStorage.getItem('storageLogs');
  return storageLogs ? JSON.parse(storageLogs) : [];
};

export const deleteData = (id: StorageLog['id']): StorageLog[] => {
    const currentLogs: StorageLog[] = loadData();
    const updatedLogs = currentLogs.filter((log) => log.id !== id);
    localStorage.setItem('storageLogs', JSON.stringify(updatedLogs));
    return updatedLogs;
};