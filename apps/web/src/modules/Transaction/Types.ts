export enum Status {
  IN_PROCESS = 'IN_PROCESS',
  SUCCESS = 'SUCCESS',
  FAILED = 'FAILED',
}
export type Receipt = {
  source: string;
  destination: string;
  amount: number;
  status: Status;
  timestamp: number;
  block?: number;
  blockHash?: string;
  gasUsed?: number;
  receiptHash?: string;
};
