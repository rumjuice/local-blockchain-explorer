import {BigNumber} from 'ethers';
import Mongoose from 'mongoose';

export enum Status {
  IN_PROCESS = 'IN_PROCESS',
  SUCCESS = 'SUCCESS',
  FAILED = 'FAILED',
}
export type SendTransactionParam = {
  to: string;
  value: string;
};
export type SendTransaction = {
  to: string;
  value: BigNumber;
};
export type TransactionSchema = {
  source: string;
  destination: string;
  amount: BigNumber | number;
  status: Status;
  timestamp: number;
  block?: number;
  blockHash?: string;
  gasUsed?: number;
  receiptHash?: string;
};

const transactionSchema = new Mongoose.Schema<TransactionSchema>({
  source: {type: String, required: true},
  destination: {type: String, required: true},
  amount: {type: Number, required: true},
  timestamp: {type: Number, required: true},
  block: Number,
  blockHash: String,
  status: {type: String, default: Status.IN_PROCESS},
  gasUsed: Number,
  receiptHash: String,
});

export const Transaction = Mongoose.model('Transaction', transactionSchema);
