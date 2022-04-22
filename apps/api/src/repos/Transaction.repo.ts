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
  // Create transaction on blockchain
  const send = await wallet.sendTransaction(params);
  // Wait for the transaction to be mined
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
    // Create new Transaction model
    const tx = new Transaction(params);
    // Validate the schema
    await tx.validate();
    // Save to mongodb
    return tx.save();
  } catch (error) {
    throw new Error(error);
  }
}
export default { sendTransaction, saveTransaction } as const;
