import { TransactionResponse } from "@ethersproject/abstract-provider";
import { SendTransaction } from "@models/Transaction.model";
import { wallet } from "./Blockchain.provider";

/**
 * Send transaction.
 *
 * @param params
 * @returns
 */
async function sendTransaction(
  params: SendTransaction
): Promise<TransactionResponse> {
  return await wallet.sendTransaction(params);
}

export default { sendTransaction } as const;
