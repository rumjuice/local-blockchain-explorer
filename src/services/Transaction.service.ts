import { SendTransactionParam } from "@models/Transaction.model";
import TransactionRepo from "@repos/Transaction.repo";
import { utils } from "ethers";

/**
 * Send transaction
 *
 * @param params
 * @returns
 */
async function sendTransaction(params: SendTransactionParam): Promise<string> {
  const param = { ...params, value: utils.parseEther(params.value) };

  const send = await TransactionRepo.sendTransaction(param);
  console.log(send);

  return "1 ETH";
}

export default { sendTransaction } as const;
