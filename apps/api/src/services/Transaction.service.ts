import {SendTransactionParam, Status} from '@models/Transaction.model';
import {wallet} from '@repos/Blockchain.provider';
import TransactionRepo from '@repos/Transaction.repo';
import {utils} from 'ethers';

/**
 * Send transaction
 *
 * @param params
 * @returns
 */
async function sendTransaction(params: SendTransactionParam): Promise<string> {
  // Parse value from ether to wei
  const param = {...params, value: utils.parseEther(params.value)};

  try {
    // Send transaction to blockchain
    const send = await TransactionRepo.sendTransaction(param);
    // Save transaction to mongodb
    await TransactionRepo.saveTransaction({
      source: send.from,
      destination: send.to,
      amount: param.value,
      status: Status.SUCCESS,
      gasUsed: send.gasUsed.toNumber(),
      receiptHash: send.transactionHash,
    });
    // Return sender balance
    const balance = await wallet.getBalance();
    return `${utils.formatEther(balance)} ETH`;
  } catch (error) {
    // Save failed transaction to mongodb
    const from = await wallet.getAddress();
    await TransactionRepo.saveTransaction({
      source: from,
      destination: param.to,
      amount: param.value,
      status: Status.FAILED,
    });

    throw new Error(error);
  }
}

export default {sendTransaction} as const;
