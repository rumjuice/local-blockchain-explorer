import { TransactionReceipt } from "@ethersproject/abstract-provider";
import {
  SendTransaction,
  Transaction,
  TransactionSchema,
} from "@models/Transaction.model";
import { Document } from "mongoose";
import { provider, wallet } from "./Blockchain.provider";

/**
 * Send transaction.
 *
 * @param params
 * @returns
 */
async function sendTransaction(
  params: SendTransaction
): Promise<TransactionReceipt> {
  const send = await wallet.sendTransaction(params);
  const tx = await provider.waitForTransaction(send.hash, 1);

  return tx;
}

/**
 * Save transaction
 *
 * @param params
 * @returns
 */
async function saveTransaction(params: TransactionSchema): Promise<Document> {
  try {
    const tx = new Transaction(params);
    await tx.validate();

    return tx.save();
  } catch (error) {
    throw new Error(error);
  }
}
export default { sendTransaction, saveTransaction } as const;
