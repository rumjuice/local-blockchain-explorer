import { BigNumber } from "ethers";
import { provider } from "./Blockchain.provider";

/**
 * Get all accounts.
 *
 * @returns
 */
async function getAccounts(): Promise<string[]> {
  return await provider.listAccounts();
}

/**
 * Get account balance.
 *
 * @returns
 */
async function getBalance(address: string): Promise<BigNumber> {
  return await provider.getBalance(address);
}

export default {
  getAccounts,
  getBalance,
} as const;
