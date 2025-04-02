import { InputDataArray } from "../common/types";

export const addCommasToNumber = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const countTotal = (inputArray: InputDataArray, positionIndex: number): number => {
  return inputArray.reduce((sum, line) => {
    return sum + Number(line[positionIndex].replace(',', ''));
  }, 0);
};