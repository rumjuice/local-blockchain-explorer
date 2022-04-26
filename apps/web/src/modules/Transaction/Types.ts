export enum Status {
  IN_PROCESS = 'IN_PROCESS',
  SUCCESS = 'SUCCESS',
  FAILED = 'FAILED',
}
export enum TransactionPath {
  History = '/transaction',
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
export const TransactionTab = {
  route: TransactionPath.History,
  title: 'Transactions',
};
