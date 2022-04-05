import { BigNumber } from "ethers";

export type SendTransactionParam = {
  to: string;
  value: string;
};
export type SendTransaction = {
  to: string;
  value: BigNumber;
};
