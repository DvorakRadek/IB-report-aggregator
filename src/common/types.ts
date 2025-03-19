export type InputDataArray = string[][];

export type ParsedDataArray = Array<{ symbol: string, data: InputDataArray }>;

export interface SymbolData {
  symbol: string,
  unrealizedTotal: number,
  realizedTotal: number,
  total: number,
}

export interface StorageLog {
  numberId: number,
  id: string,
  inputData: string,
  outputData: SymbolData[],
}