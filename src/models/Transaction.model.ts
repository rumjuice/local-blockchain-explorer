import { BigNumber } from "ethers";
import Mongoose from "mongoose";

export enum Status {
  IN_PROCESS = "IN_PROCESS",
  SUCCESS = "SUCCESS",
  FAILED = "FAILED",
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
  amount: BigNumber;
  status?: Status;
  gasUsed?: number;
  receiptHash?: string;
};

const transactionSchema = new Mongoose.Schema<TransactionSchema>({
  source: { type: String, required: true },
  destination: { type: String, required: true },
  amount: { type: Number, required: true },
  status: { type: String, default: Status.IN_PROCESS },
  gasUsed: Number,
  receiptHash: String,
});

export const Transaction = Mongoose.model("Transaction", transactionSchema);

// const receipt = {to: '0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC',
// from: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
// contractAddress: null,
// transactionIndex: 0,
// gasUsed: BigNumber { _hex: '0x5208', _isBigNumber: true },
// logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
// blockHash: '0x6ede01b9446d7c72f72d20293559103a0fe13499702847de025e9c086c25da2f',
// transactionHash: '0x9dfab85571c96980288a4b9c5c5424dacabf6e1a348d37fe84f4f36e721ca7b0',
// logs: [],
// blockNumber: 4,
// confirmations: 1,
// cumulativeGasUsed: BigNumber { _hex: '0x5208', _isBigNumber: true },
// effectiveGasPrice: BigNumber { _hex: '0x7c5df92d', _isBigNumber: true },
// status: 1,
// type: 2,
// byzantium: true}
