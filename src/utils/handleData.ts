import { InputDataArray, ParsedDataArray, StorageLog, SymbolData } from "../common/types";

const getArrayOfString = (inputString: string): InputDataArray => {
  const inputArray = inputString.split('\n').map((line) => line.split('\t'));

  const parseOptionsBySymbol = inputArray.map((line) => {
      const optionSymbol = line[0].split(' ');
      line[0] = optionSymbol[0];
      return line;
    });

  const regex = /^[A-Z]{1,1}$|^[A-Z]{2,}$/;

  const stocksAndOptionsArray = parseOptionsBySymbol.filter((line) => {
    return regex.test(line[0]);
  });

  return stocksAndOptionsArray;
}

const getArrayOfSymbols = (inputArray: InputDataArray): string[] => {
  const symbolArray: string[] = [];
  inputArray.forEach((line) => {
    if (!symbolArray.includes(line[0])) {
      symbolArray.push(line[0]);
    }
  });
  return symbolArray;
};

const parseInputDataArrayBySymbol = (inputArray: InputDataArray): ParsedDataArray => {
  const symbols = getArrayOfSymbols(inputArray);
  return symbols.map((symbol) => {
    const parsedArray = inputArray.filter((line) => line[0] === symbol);
    return { symbol, data: parsedArray };
  });
};

const countTotal = (inputArray: InputDataArray, positionIndex: number): number => {
  return inputArray.reduce((sum, line) => {
    return sum + Number(line[positionIndex].replace(',', ''));
  }, 0);
};

const parseFinalData = (inputArray: ParsedDataArray): SymbolData[] => {
return inputArray.map((symbolData) => {
  return {
    symbol: symbolData.symbol,
    unrealizedTotal: Number(countTotal(symbolData.data, 11).toFixed(2)),
    realizedTotal: Number(countTotal(symbolData.data, 6).toFixed(2)),
    total: Number(countTotal(symbolData.data, 12).toFixed(2)),
  }
})
};

const parseData = (input: string): SymbolData[] => {
  const arrayOfInputString = getArrayOfString(input);
  const filteredArray = parseInputDataArrayBySymbol(arrayOfInputString);
  const finalData = parseFinalData(filteredArray);
  return finalData;
};

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