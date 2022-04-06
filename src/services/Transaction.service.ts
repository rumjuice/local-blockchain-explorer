import { SendTransactionParam, Status } from "@models/Transaction.model";
import { wallet } from "@repos/Blockchain.provider";
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

  try {
    const send = await TransactionRepo.sendTransaction(param);
    const save = await TransactionRepo.saveTransaction({
      source: send.from,
      destination: send.to,
      amount: param.value,
      status: Status.SUCCESS,
      gasUsed: send.gasUsed.toNumber(),
      receiptHash: send.transactionHash,
    });
    console.log(save);

    const balance = await wallet.getBalance();
    return `${utils.formatEther(balance)} ETH`;
  } catch (error) {
    const from = await wallet.getAddress();
    const save = await TransactionRepo.saveTransaction({
      source: from,
      destination: param.to,
      amount: param.value,
      status: Status.FAILED,
    });
    console.log("error", save);
    throw new Error(error);
  }
}

export default { sendTransaction } as const;
