export interface OutputData {
  symbolName: string,
  unrealizedTotal: number,
  realizedTotal: number,
  total: number,
}

export interface Report {
  id: string,
  inputData: string,
  outputData: OutputData[],
}