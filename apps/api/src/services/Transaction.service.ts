import {
  SendTransactionParam,
  Status,
  TransactionSchema,
} from '@models/Transaction.model';
import {wallet} from '@repos/Blockchain.provider';
import TransactionRepo from '@repos/Transaction.repo';
import {utils} from 'ethers';

/**
 * Get transaction history
 *
 * @returns
 */
async function getTransactionHistory(): Promise<TransactionSchema[]> {
  try {
    return await TransactionRepo.getTransactionHistory();
  } catch (error) {
    throw new Error(error);
  }
}

/**
 * Send transaction
 *
 * @param params
 * @returns
 */
async function sendTransaction(
  params: SendTransactionParam,
): Promise<TransactionSchema> {
  // Parse value from ether to wei
  const param = {...params, value: utils.parseEther(params.value)};

  try {
    // Send transaction to blockchain
    const send = await TransactionRepo.sendTransaction(param);
    // Get block timestamp
    const block = await TransactionRepo.getBlock(send.blockNumber);

    const receipt = {
      source: send.from,
      destination: send.to,
      amount: param.value,
      status: Status.SUCCESS,
      timestamp: block.timestamp * 1000,
      gasUsed: send.gasUsed.toNumber(),
      receiptHash: send.transactionHash,
      block: send.blockNumber,
      blockHash: block.hash,
    };
    // Save transaction to mongodb
    await TransactionRepo.saveTransaction(receipt);
    // return tx receipt
    return {...receipt, amount: parseInt(param.value.toString())};
  } catch (error) {
    // Save failed transaction to mongodb
    const from = await wallet.getAddress();
    await TransactionRepo.saveTransaction({
      source: from,
      destination: param.to,
      amount: param.value,
      timestamp: Date.now(),
      status: Status.FAILED,
    });

    throw new Error(error);
  }
}

export default {getTransactionHistory, sendTransaction} as const;
