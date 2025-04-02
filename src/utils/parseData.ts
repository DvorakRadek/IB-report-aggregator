import { InputDataArray, ParsedDataArray, SymbolData } from "../common/types";
import { countTotal } from "./helpers";

export const parseData = (inputString: string): SymbolData[] => {
  const getArrayOfStrings = (inputString: string): InputDataArray => {
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

  const parseInputArrayBySymbol = (inputArray: InputDataArray): ParsedDataArray => {
    const symbolArray: string[] = [];
    inputArray.forEach((line) => {
      if (!symbolArray.includes(line[0])) {
        symbolArray.push(line[0]);
      }
    });
    
    return symbolArray.map((symbol) => {
      const parsedArray = inputArray.filter((line) => line[0] === symbol);
      return { symbol, data: parsedArray };
    });
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

  const arrayOfStrings = getArrayOfStrings(inputString);
  const filteredArray = parseInputArrayBySymbol(arrayOfStrings);
  const finalData = parseFinalData(filteredArray);
  return finalData;
};